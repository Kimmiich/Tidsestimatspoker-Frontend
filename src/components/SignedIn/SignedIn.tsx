import React, { useEffect, useState } from 'react';
import Issue from '../Issue';
import Header from '../Header';

import './SignedIn.css';

interface Props {
    user: string;
}

function SignedIn(props: Props) {
    const { user } = props;

    //Capitalize the first letter of name
    const displayName = user.charAt(0).toLocaleUpperCase() + user.slice(1);

    // Fetched from github - only name and project
    const [issuesFromGH, setIssuesFromGH] = useState([]);

    // Saved to our db - with time estimates per person
    const [issuesFromDB, setIssuesFromDB] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/Kimmiich/Tidsestimatspoker-Frontend/issues'
        )
            .then((res) => res.json())
            .then((data) => {
                setIssuesFromGH(
                    data.map((issue: any) => {
                        return {
                            issueName: issue.title,
                            githubProject: 'Tidsestimatspoker-Frontend',
                        };
                    })
                );
            });
    }, []);

    useEffect(() => {
        fetch('https://timeestimator.herokuapp.com/setallissues', {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(issuesFromGH),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('data from mongodb', data);
            })
            .catch((err) => console.log(err));
    }, [issuesFromGH]);

    useEffect(() => {
        fetch('https://timeestimator.herokuapp.com/getallissues-with-all-estimates')
            .then((res) => res.json())
            .then((data) => {
                // replace issues with mongoDB data
                console.log('data from mongodb with time estimates', data);
                setIssuesFromDB(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="signed-in-page">
            <header className="signed-in-header">
                <h1 className="signed-in-text">{displayName}</h1>
            </header>
            <main className="project-container">
                <header>
                    <Header
                        projectName="Tidsestimatspoker-Frontend"
                        issues={issuesFromDB}
                    />
                </header>
                <div>
                    {issuesFromDB.map((issue, i) => {
                        return <Issue key={i} issue={issue} user={user} />;
                    })}
                </div>
            </main>
        </section>
    );
}

export default SignedIn;
