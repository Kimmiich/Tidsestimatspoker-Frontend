import { useState } from 'react';
import saveInput from '../../helperFunctions/saveInputs';

import './TimeEstimationForm.css';

interface Props {
    user: string;
    issueName: string;
    issue: {
        bjorn?: number
        emil?: number
        kimmie?: number
        love?: number
        stina?: number
    }
}


function TimeEstimationForm(props: Props) {

    const { user, issueName, issue } = props;

    const [estimatedHours, setEstimatedHours] = useState('');

    const handleSubmit = (evt: any) => {
        evt.preventDefault();

        let hoursAsNumber = parseInt(estimatedHours, 10);

        let newInput = {
            issueName: issueName,
            time: hoursAsNumber,
            user: user,
        };
        console.log('newInput: ', newInput);
        saveInput(newInput);
    };

    const handleInputChange = ({ target }: any) => {
        if (target.value < 1) target.value = 1;
        if (target.value > 999) target.value = 999;
        setEstimatedHours(target.value);
    };

    const checkEstimHours = () => {


        for (let [name, time] of Object.entries(issue)) {
            if (name === user) {
                let guess = time.toString()
                return guess
            }
        }
    }

    return (
        <form className="time-estimation-form" onSubmit={handleSubmit}>
            <p>
                <label>Jag estimerar att det tar: </label>
                <br />
                <input
                    type="number"
                    value={estimatedHours}
                    onChange={handleInputChange}
                    required
                    placeholder={checkEstimHours()}
                />
                timmar
            </p>
            <p>
                <button className='saveTimeBtn' type="submit">
                    Spara estimerade timmar
                </button>
            </p>
        </form>
    );
}

export default TimeEstimationForm;
