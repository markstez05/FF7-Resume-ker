import React, { Component } from 'react';
import {  deleteSkill, getSkillById } from '../../actions/SkillActions';
import { connect } from 'react-redux';


class SkillButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      skill: []
    }
  }

 
  onSkillClick = (id) => {
      return console.log("skillID", this.props)
};

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("dragging")
}

allowDrop(ev) {
  ev.preventDefault();
};

drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
};

  render = () => {
    const { id, title, deleteSkill } = this.props;
    return (
      <div className="skill_buttons">
      <button
      id={id} 
      className="circle2" 
      draggable="true"
      onDragStart={this.drag}
      onDrop={this.drop} 
      onClick={() => {
        this.onSkillClick(id);
        this.setState({
            title: "asdf",
        })
    }}
      ></button>
      <h3 className="skill-title">{title}</h3>
       <button onClick={e => { deleteSkill(id); }} className='work_button_2'>Drop</button>
      </div>
    );
  }
}

export default connect(null, { deleteSkill, getSkillById })(SkillButton);