import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
/*const AboutUs = () =>{
    return (
        <div>
        <User />
        <UserClass name={"Narayanan"} location={"Chennai"} email={"narayanan.chandra.sekar@example.com"} />
        </div>
        
    )
}
*/
class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent Render");
        return (
            <div>
                <h1>About Us Page</h1>
                <div>
                    <UserContext.Consumer>
                        {({ loggedInUser }) => <span className="font-bold">Welcome, {loggedInUser}!</span>}         
                    </UserContext.Consumer>
                </div>

                <User />
                
                <UserClass name={"First child"} location={"Chennai"} email={"narayanan.chandra.sekar@example.com"} />
                <UserClass name={"Second child"} location={"Chennai"} email={"narayanan.chandra.sekar@example.com"} />
            </div>
        );
    }
}
export default AboutUs;