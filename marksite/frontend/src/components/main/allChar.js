import React, { Component } from 'react';
import {  getUsers } from '../../actions/UserActions';
import { connect } from 'react-redux';


class AllChar extends Component {


  render = () => {
  	const { id, username, index } = this.props;
    return (
        <div id={id}className='main1'>
        <div>
        <img className='char_pic' id="pic" src="https://pbs.twimg.com/profile_images/1267009503/ff7-cid2_400x400.jpg"  alt="Generic placeholder" />
        </div>
        <div className="stats" >
        <h1 className="name">{username}</h1>
         <span className="level_lable">LV<span className="level">11</span></span>
         <span className="level_lable">HP<span className="level_num">550/550</span></span>
         <span className="level_lable">MP<span className="level_num">110/110</span></span>
        </div>
     </div>
    );
  }
}

export default connect(null, { getUsers })(AllChar);