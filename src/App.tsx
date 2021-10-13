import React, { useState } from 'react';

import StartPage from './components/Startpage';

function App() {
	const [userName, setUserName] = useState('');

	let saveUser = (userName: string) => {
		console.log('saveUser()', userName);
		setUserName(userName);
	};

	return (
		<div className='App'>
			<StartPage getUser={saveUser} />
		</div>
	);
}

export default App;
