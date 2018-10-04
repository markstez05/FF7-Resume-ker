import React, { Component } from 'react';
import Clock from 'react-live-clock';
import './time.css'

class Time extends Component {
    render() {
        return(
            <div className="clock">
            <span> Time <span className="time_text">
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} /></span></span>
            <span>Gil <span className="time_text">00025</span></span>
            </div>
        );
    }
}
export default Time;