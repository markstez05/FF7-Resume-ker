import React, { Component } from 'react';

class Location extends Component {
    constructor(props){
        super();
        this.state = {
            location: "",
        }
    }
    componentDidMount = () => {
        let user = window.localStorage.getItem("user");
        user = JSON.parse(user);
        this.setState({
            location: user.location,
        })
      };

    render() {
        return(
            <div className="location">
            <p> {this.state.location}</p>
            </div>
        );
    }
}
export default Location;