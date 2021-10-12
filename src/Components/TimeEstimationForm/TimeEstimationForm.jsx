import { useState } from 'react';

import './TimeEstimationForm.css';

function TimeEstimationForm() {
	const [estimatedHours, setEstimatedHours] = useState('0');

	const handleSubmit = (evt) => {
		evt.preventDefault();

		/* 
        Skicka estimatedHours till databasen
        OBS
        Med inloggade userns username
        */
	};

	const handleInputChange = ({ target }) => {
		if (target.value < 1) target.value = 1;
		if (target.value > 999) target.value = 999;
		setEstimatedHours(target.value);
	};

	return (
		<form className='time-estimation-form' onSubmit={handleSubmit}>
			<p>
				<label>I think this task will take:</label>
				<input
					type='number'
					value={estimatedHours}
					onChange={handleInputChange}
					required
				/>
				hours
			</p>
			<p>
				<button type='submit'>Spara estimerade timmar för detta issue</button>
			</p>
		</form>
	);
}

export default TimeEstimationForm;
