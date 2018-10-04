import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSkill, addSkill } from '../../actions/SkillActions';
import SkillButton from '../skills/skillButton';
import "./skills.css";
import { FaStar } from "react-icons/fa"

class Skills extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            desc: "",
            level: "",
            type: "",
            equip: false
        }
    }

    submit = e => {
        e.preventDefault();
        const { title, desc, level, type } = this.state;
        if(title !== '' &&  desc !== '' && level !== '' && type !== '') {
            const newHistory = { title, desc, level, type};
            this.props.addSkill(newHistory);
            this.props.history.push('/main/skills/');
        }
        this.setState({
            title: "",
            desc: "",
            level: "",
            type: "",
        });
    }

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
    componentDidMount = () => this.props.getSkill();



    render() {
        const { skills, history } = this.props;
        console.log("SKILLPROPS", this.props.skills)
        const { title, desc, level, type } = this.state;
        return (
           <div className="experience_list">
           <div className="exp_menu">
        <div className='main'>
        <div>
        <img className='char_pic' id="pic" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/19904888_10209584905126356_7157597337840962614_n.jpg?_nc_cat=0&oh=9e71fddbf168cf39ae407ae1923936f2&oe=5BD55437"  alt="Generic placeholder" />
        </div>
        <div className="stats" >
        <h1 className="name">Mark Stesney</h1>
         <span className="level_lable">LV<span className="level">11</span></span>
         <span className="level_lable">HP<span className="level_num">550/550</span></span>
         <span className="level_lable">MP<span className="level_num">110/110</span></span>
        </div>
        </div>
        <div className="slots">
            <h2 className="weapon"><span className="wpn-title">Wpn:</span>Front End</h2>
            <div className="skill-bar">
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles">
            </div>
            </div>
            <h2 className="weapon"><span className="wpn-title">Arm:</span>Back End</h2>
            <div className="skill-bar">
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div><h1 className="equal">=</h1>
            <div id="div1" onDrop={this.drop} onDragOver={this.allowDrop} className="circles"></div>
            </div>
            </div>
        </div>
           <div className="work_history">

           
            <div className="work_title">
          <h1 className="work_header">Equips "<span className="level_lable">{title}</span>"  Skill</h1>
          </div>
          <div className="work_box2">
          <div className="work_info2">
          <div>
          <h4 className="level_lable">Level</h4>
          <h1 className="star">
          <FaStar style={{color: level > 0 ? "rgb(35, 190, 35)" : "black"}} className="star1"/>
          <FaStar style={{color: level > 1 ? "rgb(35, 190, 35)" : "black"}} className="star1" />
          <FaStar style={{color: level > 2 ? "rgb(35, 190, 35)" : "black"}} className="star1" />
          <FaStar style={{color: level > 3 ? "rgb(35, 190, 35)" : "black"}} className="star1" />
          <FaStar style={{color: level > 4 ? "rgb(35, 190, 35)" : "black"}} className="star1"/>
          </h1>
          </div>
          <div>
          <h4 className="level_lable">Skill Type</h4>
          <h2>{type}</h2>
          </div>
          </div>
          <div className="work_form2">
          <div className="work_form1">
                {skills.map((skill, i) => {
                 const { _id, title, desc, level, type } = skill;
                 console.log("MAP PROPS", this.props)
                     return (
                         <SkillButton
                         key={_id}
                         id={_id}
                         index={i}
                         title={title}
                         desc={desc}
                         level={level}
                         type={type}
                         history={history} 
                         />
                         )
                    })
                }
                </div>
                 <div className="exp_bar2">
           <p className="exp_title2">Gain Skills</p>
           <div className="work_input">
           <form onSubmit={this.submit}>
	      	<div className='input'>
	      		<input
		      		type="text"
		      		placeholder="Skill Title"
		      		value={title}
		      		onChange={e => this.setState({ title: e.target.value})} />
	      		</div>
                  <div className='input'>
	      		<input
		      		type="number"
		      		placeholder="Skill Level 1-5"
		      		value={level}
		      		onChange={e => this.setState({ level: e.target.value})} />
	      		</div>
                  <div className='input'>
	      		<input
		      		type="text"
		      		placeholder="Skill Type"
		      		value={type}
		      		onChange={e => this.setState({ type: e.target.value})} />
	      		</div>
	       	<div className='input'>
		      	    <textarea
                    type="text"  
		      		placeholder="Skill Description"
		      		value={desc}
		      		onChange={e => this.setState({ desc: e.target.value })}></textarea><button className="equip_button">GAIN SKILL</button>
		      		</div>
		      		<div className='input'>
		      		</div>
	      		</form>
                  </div>
           </div>
            </div>
           </div>
          </div>
        </div>
        )
    }
}

const mSTP = state => {
    return {
      skills: state.SkillReducer
    }
}
export default connect(mSTP, { addSkill, getSkill })(Skills);