import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';
import { useState, useEffect } from 'react';
import checkIfNumber from '../helperFunctions/checkIfNumber';
import saveActualTime from '../helperFunctions/saveActualTime';

interface Props {
    issue: {
        issueName: string;
        githubProject: string;
        bjorn?: number;
        emil?: number;
        kimmie?: number;
        love?: number;
        stina?: number;
    };
    user: string;
}

const Issue = (props: Props) => {
    const { issue, user } = props;
    const [estimates, setEstimates] = useState([
        issue.bjorn,
        issue.emil,
        issue.kimmie,
        issue.love,
        issue.stina,
    ]);

    useEffect(() => {
        setEstimates([
            issue.bjorn,
            issue.emil,
            issue.kimmie,
            issue.love,
            issue.stina,
        ]);
    }, [props.issue]);

    const [actualTime, setActualTime] = useState();

    const onChange = (evt: any) => {
        setActualTime(evt.target.value);
    };

    const sendTime = () => {
        saveActualTime(actualTime, issue);
    };

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
                {checkIfNumber(estimates) ? <Summary array={estimates} /> : ''}
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
                <button onClick={sendTime} style={{ padding: '0.6rem' }}>
                    Spara
                </button>
            </div>
        </>
    );
};

export default Issue;
