import React, {Component} from 'react';
import {  updateUser } from '../../actions/UserActions';
import { connect } from 'react-redux';

class CharEdit extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            age: "",
            location: "",
            picture: "",
            userClass: "",
            id: ""
        }
    }

      submit = (e, props) => {
        e.preventDefault();
        const { name, location, age, userClass } = this.state;
        this.props.updateUser({
              name: name === '' ? this.props.name : name,
              location: location === '' ? this.props.location : location,
              age: age === '' ? this.props.age : age,
              userClass: userClass === '' ? this.props.userClass : userClass,
            }, this.props._id);
            this.props.closeModal();
      }

    render = () => {
       const {name, age, location, userClass } = this.state;
      return (
          <div className="info-modal">
           <form onSubmit={this.submit}>
	      	<div className='input-modal'>
	      		<input
		      		type="text"
		      		placeholder="Name"
		      		value={name}
		      		onChange={e => this.setState({ name: e.target.value})} />
	      		</div>
                  <div className='input-modal'>
	      		<input
		      		type="text"
		      		placeholder="Location"
		      		value={location}
		      		onChange={e => this.setState({ location: e.target.value})} />
	      		</div>
                  <div className='input-modal'>
	      		<input
		      		type="text"
		      		placeholder="Age"
		      		value={age}
		      		onChange={e => this.setState({ age: e.target.value})} />
	      		</div>
                  <div className='input-modal'>
	      		<input
		      		type="text"
		      		placeholder="Job Title"
		      		value={userClass}
		      		onChange={e => this.setState({ userClass: e.target.value})} />
                <button className="equip_button">Modify</button>
	      		</div>
	      		</form>
       </div>
      );
    }
  }
  

  export default connect(null, { updateUser })(CharEdit);