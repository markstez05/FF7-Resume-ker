import React, {Component} from 'react';
import Main  from "../main/main";
import './interests.css';

class Interests extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            desc: ""
        }
    };

    render() {
        const a = "sadf"
        return (
            <div className="interests-div">
            <div className="desc-div">
            <h3>Description:{this.state.desc}</h3>
            {/* <h3 className="interest-title">Interests</h3> */}
            </div>
                <div className="interest-container">
                <div className="left-div">
                <Main />
                <div className="exp_bar">
	 <p className="exp_title">Experience</p>
                <form onSubmit={a}>
		 <div className='input'>
			 <input
				 type="text"
				 placeholder={a}
				 value={a}
				 onChange={e => this.setState({ title: e.target.value})} />
			 </div>
						 <div className='input'>
			 <input
				 type="text"
				 placeholder={a}
				 value={a}
				 onChange={e => this.setState({ location: e.target.value})} />
			 </div>
						 <div className='input'>
			 <input
				 type="text"
				 placeholder={a}
				 value={a}
				 onChange={e => this.setState({ date: e.target.value})} />
			 </div>
		 <div className='input'>
					 <textarea
				 placeholder={a}
				 value={a}
				 onChange={e => this.setState({ text: e.target.value })}></textarea>
				 <button className="equip_button">Add Interest</button>
				 </div>
			 </form>
             </div>
             </div>
                <div className="interest-list">
                <h1>List</h1>
                </div>
                </div>
            </div>
        )
    }
};

export default Interests;