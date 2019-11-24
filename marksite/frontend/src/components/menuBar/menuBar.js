import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "./menubar.css";

class MenuBar extends Component {
  shouldComponentUpdate = (nextProps, nextState) => false; 

  logout = () => {
        // const server = 'https://ff7backend.herokuapp.com/api/users/logout';
        const server = 'http://localhost:8081/api/users';
        Axios.get(server)
      .then(res => {
        window.localStorage.clear();
        console.log()
        this.props.history.push('/');
      })
    }

    render () {
        return (
            <div className="sidebar">
            <div className='side_button'>
            <Link to='/main'> <button className='bar_tag'> Main</button></Link> 
            <Link to='/main/skills'><button className='bar_tag'>Skills </button> </Link>
            <button className='bar_tag'> </button> 
            <Link to='/main/exp'> <button className='bar_tag'>Experience</button></Link>
            <button className='bar_tag'>Education </button> 
            <button className='bar_tag'> </button> 
            <button className='bar_tag'>Volunteer </button> 
            <Link to='/main/interests'><button className='bar_tag'>Interests</button></Link>
            <button className='bar_tag'>References </button> 
            <button className='bar_tag'> </button> 
            <button onClick={this.logout} className='bar_tag'>Logout </button> 
            </div>
            </div>
        );
    }
}
export default MenuBar;