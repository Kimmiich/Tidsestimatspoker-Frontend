import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';

interface Props {
    issue: {
        issueName: string;
        githubProject: string;
    };
}

const Issue = (props: Props) => {
    const { issue } = props;
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
                <TimeEstimationForm />
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
