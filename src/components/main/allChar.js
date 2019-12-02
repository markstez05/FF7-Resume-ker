import React, { Component } from 'react';
import {  getUsers } from '../../actions/UserActions';
import { connect } from 'react-redux';


class AllChar extends Component {

    render = (picture) =>{
      document.getElementById('picture').src = "localhost:8081/api/" + picture;
    }
    hpGenerate = age => {
      let num = age * 50;
      return num;
    }
    mpGenerate = age => {
      let num = age * 10;
      return num;
    }
  render = () => {
    const { id, username, userClass, name, picture, age } = this.props;
    const userPicture = `https://ff7backend.herokuapp.com/api/${picture}`;
    const defaultPhoto = "https://ff7backend.herokuapp.com/api/media/images/default.jpg";
    return (
        <div 
        id={id}
        key={id}
        className='main1'>
        <div>
        <img className='char_pic' id="picture" src={ picture ? userPicture : defaultPhoto } />
        </div>
        <div className="stats" >
        <h1 className="allName">{ name ? name : username }</h1>
         <span className="level_label">LV<span className="level">{ age ? age  : 0 }</span>
         <span className="className">{ userClass ? userClass  : null }</span></span>
         <span className="level_label">HP<span className="level_num">{age ? `${this.hpGenerate(age)}/${this.hpGenerate(age)}` : '0/0'}</span></span>
         <span className="level_label">MP<span className="level_num">{age ? `${this.mpGenerate(age)}/${this.mpGenerate(age)}`  : '0/0'}</span></span>
        </div>
     </div>
    );
  }
}

export default connect(null, { getUsers })(AllChar);