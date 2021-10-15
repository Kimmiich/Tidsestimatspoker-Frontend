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
				<label>Jag estimerar att denna issue tar:</label>
				<input
					type='number'
					value={estimatedHours}
					onChange={handleInputChange}
					required
				/>
				timmar att genomföra
			</p>
			<p>
				<button type='submit'>Spara estimerade timmar för detta issue</button>
			</p>
		</form>
	);
}

export default TimeEstimationForm;