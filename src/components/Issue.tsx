import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';
import { useState } from "react";
import checkIfNumber from '../helperFunctions/checkIfNumber'

interface Props {
    issue: {
        issueName: string;
        githubProject: string;
        bjorn?: number
        emil?: number
        kimmie?: number
        love?: number
        stina?: number
 
    };
    user: string;
}

const Issue = (props: Props) => {
    const { issue, user } = props;
    const [ estimates, setEstimates ] = useState([issue.bjorn, issue.emil, issue.kimmie, issue.love, issue.stina]);


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
                { checkIfNumber(estimates) ? <Summary array={estimates}/> : '' } 
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
                        style={{
                            width: '30px',
                            height: '30px',
                            textAlign: 'center',
                        }}
                    />
                </div>
                <button style={{ padding: '0.6rem' }}>Spara</button>
            </div>
        </>
    );
};


export default Issue;
