import React, { Component } from 'react';
import { connect } from 'react-redux';
import { log } from 'util';
class Location extends Component {

    render() {
        const { loggedUser } = this.props;
        return(
            <div className="location">
            <p>{ loggedUser.location ? loggedUser.location : "Somewhere, Earth" }</p>
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