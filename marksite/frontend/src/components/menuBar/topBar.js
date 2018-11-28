import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';


class TopBar extends Component {
    shouldComponentUpdate = (nextProps, nextState) => false;

    
  logout = () => {
    Axios.get('https://ff7backend.herokuapp.com/api/users/logout')
    .then(res => {
      window.localStorage.removeItem("user_work", "user_skill");
      this.props.history.push('/');
    })
  }


    render () {
        return (
            <div className="topbar">
            <div className='top_button'>
           <Link to='/main'> <button className='bar_top'>Main</button></Link>
           <Link to='/main/skills'><button className='bar_top'>Skills </button></Link>
            <Link to='/main/exp/'> <button className='bar_top'>Experience </button></Link>
            <button className='bar_top'>Education </button>
            <button className='bar_top'>Volunteer </button>
            <Link to='/main/interests'><button className='bar_top'>Interests </button></Link>
            <button className='bar_top'>References </button>
            <button onClick={this.logout} className='bar_top'>Logout </button> 
            </div>
            </div>
        );
    }
}
export default withRouter(TopBar);