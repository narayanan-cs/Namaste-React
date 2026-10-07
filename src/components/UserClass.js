import React from "react";

class Userclass extends React.Component {
    constructor(props) {
        super(props);
        
       this.state = {
            userInfo: {
            count:0,
            login:"Dummy Name",
            avatar_url:"Dummy Location",
            }
        }
    }

    async componentDidMount() {
        console.log("componentDidMount called");
            this.timer = setInterval(() => {
            console.log("Timer called here", this.timer);
        }, 1000)
            
        
        const data = await fetch("https://api.github.com/users/narayanan-cs");
        const json = await data.json();
        this.setState({userInfo: json});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate called");
        if(this.state.userInfo.count !== prevState.userInfo.count) {
            console.log("Count changed from", prevState.userInfo.count, "to", this.state.userInfo.count);
        }
    }

    componentWillUnmount() {
        console.log("componentWillUnmount called");
        clearInterval(this.timer);
    }

    render() {
        console.log("render called");
        const { login, avatar_url } = this.state.userInfo;
        const {count} = this.state.userInfo;
        return (
            <div className="user-card">
                { <img src={avatar_url} alt="User Avatar" /> }
                <h2>Name: {login}</h2>
                
                
                <p>Count: {count}</p>
                <button onClick={() => this.setState({count: count + 1})}>Increment Count</button>        
            </div>
        );
    }
}

export default Userclass;