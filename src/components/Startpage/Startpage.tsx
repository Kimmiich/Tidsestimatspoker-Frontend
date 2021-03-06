import React from 'react';
import './Startpage.css';

interface Props {
    getUser(userName: string): void;
}

interface State {
    userName: string;
}

class StartPage extends React.Component<Props, State> {
    state = {
        userName: '',
    };

    render() {
        let onChange = (evt: any) => {
            console.log('onChange', evt.target.value);
            this.setState({ userName: evt.target.value });
        };

        let onClick = () => {
            this.props.getUser(this.state.userName);
        };

        return (
            <div className="startpage-container">
                <main className="startpage-box">
                    <section className="startpage-sign-in">
                        <h1 className="title">TIDSESTIMATOR</h1>
                        <select
                            name="userNames"
                            id="userNames"
                            onChange={onChange}
                        >
                            <option value="">Välj användare</option>
                            <option value="kimmie">Kimmie</option>
                            <option value="stina">Stina</option>
                            <option value="emil">Emil</option>
                            <option value="love">Love</option>
                            <option value="bjorn">Björn</option>
                        </select>
                        <button className="sign-in" onClick={onClick}>
                            Logga in
                        </button>
                    </section>
                    <section className="footer">
                        <p className="explanation-text">
                            Välj en användare för att logga in
                        </p>
                    </section>
                </main>
            </div>
        );
    }
}

export default StartPage;
