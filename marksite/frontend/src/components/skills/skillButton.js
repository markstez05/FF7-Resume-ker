import React, { Component } from 'react';
import {  deleteSkill, getSkillById } from '../../actions/SkillActions';
import { connect } from 'react-redux';


class SkillButton extends Component {


  render = () => {
    const { id, type, title, deleteSkill, onSkillClick, drop, drag } = this.props;
    return (
      <div className="skill_buttons">
      <button
      id={id} 
      className="circle2" 
      draggable="true"
      onDragStart={drag}
      onDrop={drop} 
      onClick={onSkillClick}
      style={{background: type === "Front End" ? 
      "radial-gradient(at 34% 10px,  rgb(208, 255, 210) , rgb(12, 156, 12),  rgb(255, 255, 255))" : 
      "radial-gradient(at 34% 10px,  rgb(236, 220, 220) , rgb(156, 12, 12),  rgb(255, 255, 255))",
        border: type === "Front End" ? "2px solid rgb(43, 172, 11)" : "2px solid rgb(168, 74, 74)" }}
      >
      </button>
      <h3 className="skill-title">{title}</h3>
       <button onClick={() => { deleteSkill(id); }} className='work_button_2'>Drop</button>
      </div>
    );
  }
}

export default connect(null, { deleteSkill, getSkillById })(SkillButton);