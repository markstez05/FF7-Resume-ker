import React, {Component} from 'react';
import { addWork } from '../../actions/WorkActions';
import { connect } from 'react-redux';
import { getWork } from '../../actions/WorkActions';
import WorkButton from '../experience/workButton';
import Main  from "../main/main"
import "./exp.css";


class Work extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            location: "",
            date: "",
            text: "",
        }
    }

    handleShow = () => {
        this.setState({ showStats: !this.state.showStats });
    };

    submit = e => {
        e.preventDefault();
        const { title, location, date, text } = this.state;
        if(title !== '' &&  location !== '' && date !== '' && text !== '') {
            const newHistory = { title, location, date, text, completed: false };
            this.props.addWork(newHistory);
            this.props.history.push('/main/exp/');
        }
        this.setState({
            title: "",
            location: "",
            date: "",
            text: "",
        });
    }

    componentDidMount = () => this.props.getWork();

    render() {
        const { works, history } = this.props;
        console.log("WORKs", this.props.works)
        const { title, location, date, text } = this.state;
        return (
           <div className="experience_list">
           <div className="exp_menu">
        <Main />
        <div className="exp_bar">
           <p className="exp_title">Experience</p>
           <div className="work_input">
           <form onSubmit={this.submit}>
	      	<div className='input'>
	      		<input
		      		type="text"
		      		placeholder="Job Title"
		      		value={title}
		      		onChange={e => this.setState({ title: e.target.value})} />
	      		</div>
                  <div className='input'>
	      		<input
		      		type="text"
		      		placeholder="Work Location"
		      		value={location}
		      		onChange={e => this.setState({ location: e.target.value})} />
	      		</div>
                  <div className='input'>
	      		<input
		      		type="text"
		      		placeholder="Work Dates"
		      		value={date}
		      		onChange={e => this.setState({ date: e.target.value})} />
	      		</div>
	      	<div className='input'>
		      	    <textarea
		      		placeholder="Job Description"
		      		value={text}
		      		onChange={e => this.setState({ text: e.target.value })}></textarea><button className="equip_button">GAIN XP</button>
		      		</div>
		      		<div className='input'>
		      		</div>
	      		</form>
                  </div>
           </div>
     </div>
           <div className="work_history">
            <div className="work_title">
          <h1 className="work_header"><span className="level_lable">JOB TITLE:</span>{title}</h1>
          </div>
          <div className="work_box">
          <div className="work_info">
          <h4 className="level_lable">COMPANY</h4>
          <h1 className="titles">{location}</h1>
          <h4 className="level_lable">YEARS WORKED</h4>
          <h2>{date}</h2>
          <h4 className="level_lable">Job Description</h4>
          <p className="work_description">
          {text}
          </p>
          </div>
          <div className="work_form">
          {      works.map((work, i) => {
                   const { _id, title } = work;
                   return (
                       <WorkButton
                       key={i}
                       id={_id}
                       index={i}
                       title={title}
                       history={history} />
                   )
               })
           }
            </div>
           </div>
          </div>
        </div>
        )
    }
}

const mSTP = state => {
    return {
      works: state.WorkReducer
    }
}
export default connect(mSTP, { addWork, getWork })(Work);