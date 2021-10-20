import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';

interface Props {
  issue: {
    issueName: string;
    githubProject: string;
  };
  user: string;
}

const Issue = (props: Props) => {
  const { issue, user } = props;
  return (
    <>
      <div className='issue'>
        <div className="issueName">
          {issue.issueName}
        </div>
        <TimeEstimationForm user={user} issueName={issue.issueName} />
        <Summary array={[5, 10, 26, 7, 3]} />
        <div className='actualTime'>
          <label>Faktisk tid</label>
          <input className='actualInput'
            type="text"
            placeholder="H"
          />
        </div>
        <button className='saveActBtn'>Spara</button>
      </div>
    </>
  );
};

export default Issue;
