import React, { useState } from 'react';

import SignedIn from './components//SignedIn/SignedIn';
import StartPage from './components/Startpage/Startpage';

function App() {
    const [userName, setUserName] = useState('');

    let saveUser = (userName: string) => {
        console.log('saveUser()', userName);
        setUserName(userName);
    };

    return (
        <>
            {userName ? (
                <>
                    <button className='logOutBtn' onClick={() => saveUser('')}>Logga ut</button>
                    <SignedIn user={userName} />
                </>
            ) : (
                    <>
                        <StartPage getUser={saveUser} />
                    </>
                )}
        </>
    );
}

export default App;
