import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';
import { useState } from 'react';
import saveActualTime from '../helperFunctions/saveActualTime';

interface Props {
    issue: {
        issueName: string;
        githubProject: string;
    };
    user: string;
}

const Issue = (props: Props) => {
    const { issue, user } = props;

    const [actualTime, setActualTime] = useState();

    const onChange = (evt: any) => {       
        setActualTime(evt.target.value);       
    }

    const sendTime = () => {       
        saveActualTime(actualTime, issue);
    }


    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    height: '80px',
                }}
            >
                {issue.issueName}
                <TimeEstimationForm user={user} issueName={issue.issueName} />
                <Summary array={[5, 10, 26, 7, 3]} />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <label>Faktisk tid</label>
                    <input
                        type="text"
                        placeholder="H"
                        onChange={onChange}
                        style={{
                            width: '30px',
                            height: '30px',
                            textAlign: 'center',
                        }}
                    />
                </div>
                <button onClick={sendTime} style={{ padding: '0.6rem' }}>Spara</button>
            </div>
        </>
    );
};

export default Issue;
