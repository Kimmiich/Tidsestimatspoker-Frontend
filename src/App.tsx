import React, { useState } from 'react';

import SignedIn from './components/SignedIn';
import StartPage from './components/Startpage';

function App() {
    const [userName, setUserName] = useState('');

    let saveUser = (userName: string) => {
        console.log('saveUser()', userName);
        setUserName(userName);
    };

    return (
        <div className="App">
            {userName ? (
                <>
                    <button onClick={() => saveUser('')}>Logga ut</button>
                    <SignedIn user={userName} />
                </>
            ) : (
                <>
                    <StartPage getUser={saveUser} />
                    <p>Vänligen logga in</p>
                </>
            )}
        </div>
    );
}

export default App;
