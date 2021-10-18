import React, { useEffect, useState } from 'react';
import Issue from './Issue';
import Header from './Header';

interface Props {
    user: string;
}

function SignedIn(props: Props) {
    const { user } = props;

    const [issues, setIssues] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/Kimmiich/Tidsestimatspoker-Frontend/issues'
        )
            .then((res) => res.json())
            .then((data) => {
                setIssues(
                    data.map((issue: any) => {
                        return {
                            issueName: issue.title,
                            githubProject: 'Tidsestimatspoker-Frontend',
                        };
                    })
                );
            });
    }, []);
    return (
        <section className="signed-in-page">
            <header className="signed-in-header">
                <h1 className="signed-in-text">{user}</h1>
            </header>
            <main className="project-container">
                <header>
                    <Header projectName="Tidsestimatspoker-Frontend" />
                </header>
                <div>
                    {issues.map((issue, i) => {
                        return <Issue key={i} issue={issue} user={user} />;
                    })}
                </div>
            </main>
        </section>
    );
}

export default SignedIn;
