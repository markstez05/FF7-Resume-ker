import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteSkill,
  getSkill,
  addSkill,
  getSkillById
} from "../../actions/SkillActions";
import SkillButton from "../skills/skillButton";
import "./skills.css";
import { FaStar } from "react-icons/fa";
import Main from "../main/main";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      level: "",
      type: "",
      equip: []
    };
  }

  levelSort = () => {
    this.props.skills.sort(function(a, b) {
      if (a.level < b.level) {
        return -1;
      }
      if (a.level > b.level) {
        return 1;
      }
    });
    this.setState({
      title: "",
      desc: "",
      level: "",
      type: ""
    });
  };

  titleSort = () => {
    this.props.skills.sort(function(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
    });
    this.setState({
      title: "",
      desc: "",
      level: "",
      type: ""
    });
  };

  typeSort = () => {
    this.props.skills.sort(function(a, b) {
      if (a.type < b.type) {
        return -1;
      }
      if (a.type > b.type) {
        return 1;
      }
    });
    this.setState({
      title: "",
      desc: "",
      level: "",
      type: ""
    });
  };

  onSkillClick = _id => {
    this.props.skills.filter(c => {
      if (c._id === _id) {
        this.setState({
          title: c.title,
          level: c.level,
          desc: c.desc,
          type: c.type
        });
      }
    });
  };
  
  submit = e => {
    e.preventDefault();
    const { title, desc, level, type } = this.state;
    if (title !== "" && desc !== "" && level !== "" && type !== "") {
      const newHistory = { title, desc, level, type };
      this.props.addSkill(newHistory);
      this.props.history.push("/main/skills/");
    }
    this.setState({
      title: "",
      desc: "",
      level: "",
      type: ""
    });
  };

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  componentDidMount = () => {
    this.props.getSkill();
    this.setState({ equip: this.props.skills.type });
  };

  render() {
    const { skills } = this.props;
    const { title, desc, level, type, equip } = this.state;
    return (
      <div className="experience_list">
        <div className="exp_menu">
          <Main />
          <div id="data" className="slots">
            <h2 className="weapon">
              <span className="wpn-title">Wpn:</span>
              Front End
            </h2>
            <div className="skill-bar">
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
            </div>
            <h2 className="weapon">
              <span className="wpn-title">Arm:</span>
              Back End
            </h2>
            <div className="skill-bar">
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
              <h1 className="equal">=</h1>
              <div
                id="data"
                onDrop={this.drop}
                onDragOver={this.allowDrop}
                className="circles"
              />
            </div>
          </div>
        </div>
        <div className="work_history">
          <div className="work_title">
            <h1 className="work_header">
              Equips "<span className="level_lable">{title}</span>" Skill
            </h1>
          </div>
          <div className="work_box2">
            <div className="work_info2">
              <div>
                <h4 className="level_lable">Level</h4>
                <h1 className="star">
                  <FaStar
                    style={{ color: level > 0 ? "rgb(35, 190, 35)" : "black" }}
                    className="star1"
                  />
                  <FaStar
                    style={{ color: level > 1 ? "rgb(35, 190, 35)" : "black" }}
                    className="star1"
                  />
                  <FaStar
                    style={{ color: level > 2 ? "rgb(35, 190, 35)" : "black" }}
                    className="star1"
                  />
                  <FaStar
                    style={{ color: level > 3 ? "rgb(35, 190, 35)" : "black" }}
                    className="star1"
                  />
                  <FaStar
                    style={{ color: level > 4 ? "rgb(35, 190, 35)" : "black" }}
                    className="star1"
                  />
                </h1>
              </div>
              <div>
                <h4 className="level_lable">Skill Type</h4>
                <h2>{type}</h2>
              </div>
            </div>
            <div className="work_form2">
              <div>
                <button onClick={this.levelSort}>Sort By Level</button>
                <button onClick={this.titleSort}>Sort By Title</button>
                <button onClick={this.typeSort}>Sort By Type</button>
              </div>

              <div className="work_form1">
                {skills.map((skill, i) => {
                  const { _id, title, desc, level, type } = skill;
                  return (
                    <SkillButton
                      key={_id}
                      id={_id}
                      index={i}
                      title={title}
                      desc={desc}
                      level={level}
                      type={type}
                      onSkillClick={() => this.onSkillClick(_id)}
                      drag={this.drag}
                      drop={this.drop}
                    />
                  );
                })}
              </div>
              <div className="exp_bar2">
                <p className="exp_title2">Gain Skills</p>
                <div className="work_input">
                  <form onSubmit={this.submit}>
                    <div className="input">
                      <input
                        type="text"
                        placeholder="Skill Title"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                      />
                    </div>
                    <div className="input">
                      <input
                        type="number"
                        placeholder="Skill Level 1-5"
                        value={level}
                        onChange={e => this.setState({ level: e.target.value })}
                      />
                    </div>
                    <div className="input">
                      <select
                        className="select"
                        type="text"
                        placeholder="Skill Type"
                        value={type}
                        onChange={e => this.setState({ type: e.target.value })}
                      >
                        <option value={null} />
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                      </select>
                    </div>
                    <div className="input">
                      <textarea
                        type="text"
                        placeholder="Skill Description"
                        value={desc}
                        onChange={e => this.setState({ desc: e.target.value })}
                      />
                      <button className="equip_button">GAIN SKILL</button>
                    </div>
                    <div className="input" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = state => {
    return {
        skills: state.SkillReducer,
        skill: state.SkillReducer
    }
}
export default connect(mSTP, { deleteSkill, addSkill, getSkill, getSkillById })(Skills);