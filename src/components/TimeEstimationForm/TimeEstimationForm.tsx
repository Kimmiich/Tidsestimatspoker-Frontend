import { useState } from 'react';
import saveInput from '../../helperFunctions/saveInputs';

import './TimeEstimationForm.css';

interface Props {
    user: string;
    issueName: string;
}

function TimeEstimationForm(props: Props) {
    const { user, issueName } = props;

    const [estimatedHours, setEstimatedHours] = useState('2');

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
