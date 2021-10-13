import React from 'react';

interface Props {
  user: string;
}

function SignedIn(props: Props) {
  const { user } = props;
  return (
    <section className="signed-in-page">
      <header className="signed-in-header">
        <h1 className="signed-in-text">{user}User(placeholder)</h1>
      </header>
      <main className="project-container">
        <header>Header-container</header>
        <ul>Issues-container</ul>
        <form>Add-container</form>
      </main>
    </section>
  );
}

export default SignedIn;
