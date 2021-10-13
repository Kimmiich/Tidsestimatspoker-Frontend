
import React from "react";

interface Props {
    getUser(userName: string): void
}

interface State {
    userName: string
}


class StartPage extends React.Component<Props, State> {
    
    state = {
        userName: "",
    }

    render() {

        let onChange = (evt: any) => {
            console.log("onChange", evt.target.value);
            this.setState({userName: evt.target.value})            
        }

        let onClick = () => {
            this.props.getUser(this.state.userName)
        } 
        
        return (
            <div className="startpage-container">
                <select name="userNames" id="userNames" onChange={onChange}>
                    <option></option>
                    <option value="Kimmie">Kimmie</option>
                    <option value="Stina">Stina</option>
                    <option value="Emil">Emil</option>
                    <option value="Love">Love</option>
                    <option value="Björn">Björn</option>
                </select>
                <button onClick={onClick}>Välj användare</button>
            </div>
        ) 

    }

}


export default StartPage;