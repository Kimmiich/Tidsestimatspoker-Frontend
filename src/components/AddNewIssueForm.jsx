import { useState } from 'react';

//Not in use as we get our issues from github api

function AddNewIssueForm() {
    const [issueName, setIssueName] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        /* 
        Send issueName to db
        */

        // Clear input
        setIssueName('');
    };

    const handleTitleChange = ({ target }) => {
        setIssueName(target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label>Issue titel:</label>
                <input type="text" onChange={handleTitleChange} required />
            </p>
            <p>
                <button type="submit">Lägg till ny issue</button>
            </p>
        </form>
    );
}

export default AddNewIssueForm;
