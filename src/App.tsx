import React, { useState } from 'react';

import SignedIn from './Components/SignedIn';
import StartPage from './Components/Startpage';

function App() {
	const [userName, setUserName] = useState('');

	let saveUser = (userName: string) => {
		console.log('saveUser()', userName);
		setUserName(userName);
	};

	return (
		<div className='App'>
			{userName ? (
				<SignedIn user={userName} />
			) : (
				<div>
					<StartPage getUser={saveUser} />
					<p>Vänligen logga in</p>
				</div>
			)}
		</div>
	);
}

export default App;
