import React, {Component} from 'react';
import {  getUsers, getUserById, getUser, updateUser } from '../../actions/UserActions';
import axios from 'axios';
import { connect } from 'react-redux';
import AllChar from './allChar';
import CharEdit from './charEdit';
import "./main.css";
class Main extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            age: "",
            location: "",
            className: "",
            image: null,
            editModal: false,
            dragDrop: false,
            id: "",
        }
    }

    renderDragDrop = e => {
        e.stopPropagation();
        this.setState({ dragDrop: !this.state.dragDrop });
      };

      handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };
    
      hpGenerate = age => {
        let num = age * 50;
        return num;
      }
      mpGenerate = age => {
        let num = age * 10;
        return num;
      }

      handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('picture', this.state.image);
        const userID = window.localStorage.getItem("user");
        const user = JSON.parse(userID);
        const user_id = user._id;
        let url = `https://ff7backend.herokuapp.com/api/users/${user_id}`;
        console.log(form_data)
        axios.put(url, form_data)
        this.setState({ dragDrop: !this.state.dragDrop });
        this.props.getUserById(user._id)
      };

      handleEditModal = () => {
        this.setState({
          editModal: !this.state.editModal
        });
      };

    componentDidMount = () => {
        this.props.getUsers();
        this.props.getUser();
      };

      componentDidUpdate(prevProps) {
        const { loggedUser } = this.props;
        if (loggedUser !== prevProps.loggedUser) {
          this.setState({
            name: loggedUser.name,
            age: loggedUser.age,
            className: loggedUser.userClass,
            location: loggedUser.location,
            image: loggedUser.picture,
            id: loggedUser._id
        })  
        }
      } 
  
    render () {
        const { users, loggedUser } = this.props;
        const { name, age, className, editModal } = this.state;
        let modal = null;
        if (this.state.dragDrop) {
          modal = (
            <div className="modal">
            <form onSubmit={this.handleSubmit}>
                <input type="file"
                       id="picture"
                       accept="image/png, image/jpeg, image/gif"  
                       onChange={this.handleImageChange} 
                       required/>
              <input type="submit"/>
            </form>
          </div>
          );
        }
        return (
        <div className="main-container">
     <div className='main'>
     {modal}
        <div>
        <img className='char_pic'
         id="pic" 
         src={loggedUser.picture ? `http://localhost:8081/api/${loggedUser.picture}` : "http://localhost:8081/api/media/images/default.jpg" }
         alt="Generic placeholder" 
         onClick={e => { this.renderDragDrop(e) }}
         />
        </div>
        { editModal && 
        <CharEdit 
        age={loggedUser.age}
        _id={loggedUser._id}
        location={loggedUser.location}
        closeModal={ this.handleEditModal }
        name={loggedUser.name}
        user={loggedUser}
        userClass={loggedUser.userClass}
        /> }
        <div className="stats" >
        <h1 className="name" onClick={this.handleEditModal}>{name ? name : "NEW PLAYER" }</h1>
         <span className="level_label">LV<span className="level">{age}</span>
         <span className="className">{className}</span></span>
         <span className="level_label">HP<span className="level_num">{this.hpGenerate(age)}/{this.hpGenerate(age)}</span></span>
         <span className="level_label">MP<span className="level_num">{this.mpGenerate(age)}/{this.mpGenerate(age)}</span></span>
        </div>
     </div>
     <div className="idkyet">
          {      users.map((user, i) => {
                   const { _id, username, picture, age, name, userClass } = user;
                   return (
                       <AllChar
                       key={_id}
                       id={_id}
                       index={i}
                       age={age}
                       name={name}
                       userClass={userClass}
                       picture={picture}
                       username={username}/>
                   )
               })
           }
            </div>
     </div>
        )
    }
}

const mSTP = state => {
    return {
        users: state.UsersReducer,
        loggedUser: state.LoggedUser
    }
}

export default connect(mSTP, { updateUser, getUserById, getUsers, getUser })(Main);