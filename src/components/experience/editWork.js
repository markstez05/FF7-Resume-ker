import React, { Component } from 'react';
import { updateWork, getWork } from '../../actions/WorkActions';
import { connect } from 'react-redux';
import Main from "../main/main";

class EditWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
			title: '',
			location: '',
			date: '',
    	text: ''
    }
  }

  submit = e => {
  	e.preventDefault();
  	const { title, location, date, text } = this.state;
    const { works, match } = this.props;
    const work = works[match.params.index];
  	this.props.updateWork({
			title: title === '' ? work.title : title,
			location: location === '' ? work.location : location,
			date: date === '' ? work.date : date,
      text: text === '' ? work.text : text,
      id: work._id
    }, work._id);
  	this.props.history.push('/main/exp');
	}

	componentDidMount = () => this.props.getWork();

  render = () => {
  	const { title, location, date, text } = this.state;
    const { works, match } = this.props;
		const work = works[match.params.index];
		console.log("work", work)
    return (
			<div className="experience_list">
			<div className="exp_menu">
	<Main />
	 <div className="exp_bar">
	 <p className="exp_title">Experience</p>
	 <form onSubmit={this.submit}>
		 <div className='input'>
			 <input
				 type="text"
				 placeholder={work.title}
				 value={title}
				 onChange={e => this.setState({ title: e.target.value})} />
			 </div>
						 <div className='input'>
			 <input
				 type="text"
				 placeholder={work.location}
				 value={location}
				 onChange={e => this.setState({ location: e.target.value})} />
			 </div>
						 <div className='input'>
			 <input
				 type="text"
				 placeholder={work.date}
				 value={date}
				 onChange={e => this.setState({ date: e.target.value})} />
			 </div>
		 <div className='input'>
					 <textarea
				 placeholder={work.text}
				 value={text}
				 onChange={e => this.setState({ text: e.target.value })}></textarea>
				 <button className="equip_button">Modify</button>
				 </div>
			 </form>
			</div>
</div>
			<div className="work_history">
			 <div className="work_title">
		 <h1 className="work_header"><span className="level_label">JOB TITLE:</span> {work.title}</h1>
		 </div>
		 <div className="work_box">
		 <div className="work_info">
		 <h4 className="level_label">COMPANY</h4>
		 <h2 className="titles"
		 >{work.location}</h2>
		 <h4 className="level_label">YEARS WORKED</h4>
		 <h2 className="titles">{work.date}</h2>
		 <h4 className="level_label">Job Description</h4>
		 <p className="work_description">
		 {work.text}
		 </p>
		 </div>
		 <div className="work_form">
		 <button onClick={this.submit} className="equip_button_2">RETURN</button>
					 </div>
		 </div>
		 </div>
	 </div>
    );
  }
}

const mSTP = state => {
  return {
    works: state.WorkReducer
  }
}

export default connect(mSTP, { updateWork, getWork })(EditWork);