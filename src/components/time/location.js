import React, { Component } from 'react';
import { connect } from 'react-redux';
class Location extends Component {

    render() {
        const { loggedUser } = this.props;
        return(
            <div className="location">
            <p>{loggedUser.location}</p>
            </div>
        );
    }
}

const mSTP = state => {
    return {
        loggedUser: state.LoggedUser
    }
}
export default connect(mSTP)(Location);