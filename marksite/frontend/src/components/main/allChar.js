import React, { Component } from 'react';
import {  getUsers } from '../../actions/UserActions';
import { connect } from 'react-redux';


class AllChar extends Component {

    render = (picture) =>{
      document.getElementById('picture').src = "localhost:8081/api/" + picture;
      console.log('PIC FUNC', picture)
    }
  render = () => {
    const { id, username, index, picture } = this.props;
    const picture2 = `http://localhost:8081/api/${picture}`;
    return (
        <div 
        id={id}
        key={id}
        className='main1'>
        <div>
        <img className='char_pic' id="picture" src={picture2} />
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