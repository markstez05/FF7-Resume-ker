import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "./menubar.css";

class MenuBar extends Component {
    shouldComponentUpdate = (nextProps, nextState) => false;

    logout = () => {
        Axios.get('http://localhost:8000/api/users/logout')
        .then(res => {
          window.localStorage.removeItem("user_work");
          this.props.history.push('/');
        })
      }

    render () {
        return (
            <div className="sidebar">
            <div className='side_button'>
            <Link to='/'> <button className='bar_tag'> Main</button></Link> 
            <Link to='/main/skills'><button className='bar_tag'>Skills </button> </Link>
            <button className='bar_tag'> </button> 
            <Link to='/main/exp'> <button className='bar_tag'>Experience</button></Link>
            <button className='bar_tag'>Education </button> 
            <button className='bar_tag'> </button> 
            <button className='bar_tag'>Volunteer </button> 
            <button className='bar_tag'>Interests </button> 
            <button className='bar_tag'>References </button> 
            <button className='bar_tag'> </button> 
            <button onClick={this.logout} className='bar_tag'>Logout </button> 

            </div>

            </div>
        );
    }
}
export default MenuBar;