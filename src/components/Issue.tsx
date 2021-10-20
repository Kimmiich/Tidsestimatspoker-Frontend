import Summary from './Summary';
import TimeEstimationForm from './TimeEstimationForm/TimeEstimationForm';
import { useState, useEffect } from 'react';
import checkIfNumber from '../helperFunctions/checkIfNumber';
import saveActualTime from '../helperFunctions/saveActualTime';

interface Props {
  issue: {
    issueName: string;
    githubProject: string;
    bjorn?: number
    emil?: number
    kimmie?: number
    love?: number
    stina?: number
    actualTime?: number | string 
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
    issue.stina
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

  const [actualTime, setActualTime] = useState(issue.actualTime);

  const onChange = (evt: any) => {
    let hoursAsNumber = parseInt(evt.target.value);
    console.log('typeof hoursAsNumber', typeof hoursAsNumber);
    
    setActualTime(hoursAsNumber);
  }

  const sendTime = () => {
    
    saveActualTime(actualTime, issue);
  }
  
  const checkTime = () => {
    return (issue.actualTime)?.toString() || "-";
  }

  return (
    <>
      <div className='issue'>
        <div className="issueName">
          {issue.issueName}
        </div>
        <TimeEstimationForm user={user} issueName={issue.issueName} issue={issue} />
        {checkIfNumber(estimates) ? <Summary array={estimates} /> : ''}
        <div className='actualTime'>
          <label>Faktisk tid</label>
          <input className='actualInput'
            type="text"
            placeholder={checkTime()}
            onChange={onChange}
          />
        </div>
        <button className='saveActBtn' onClick={sendTime}>Spara</button>
      </div>
    </>
  );
};

export default Issue;
