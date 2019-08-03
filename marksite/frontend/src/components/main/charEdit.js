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
    componentDidMount = () => {
        let user = window.localStorage.getItem("user");
        user = JSON.parse(user);
        this.setState({
            name: user.name,
            age: user.age,
            location: user.location,
            userClass: user.userClass,
            id: user._id
        })        
        console.log("Window User",user)
      };
      submit = e => {
        e.preventDefault();
        let user = window.localStorage.getItem("user");
        const { name, location, age, userClass } = this.state;
        this.props.updateUser({
              name: name === '' ? user.name : name,
              location: location === '' ? user.location : location,
              age: age === '' ? user.age : age,
              userClass: userClass === '' ? user.userClass : userClass,
          
            }, this.state.id);
            
            console.log("ID", user._id)
        this.props.history.push('/main');
        window.localStorage.setItem("user", user);
      }

    render = () => {
       const {name, age, location, userClass, id} = this.state;
       console.log(this.state)
      return (
          <div className="info-modal">
           <form onSubmit={this.submit}>
	      	<div className='input-modal'>
	      		<input
		      		type="userClass"
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