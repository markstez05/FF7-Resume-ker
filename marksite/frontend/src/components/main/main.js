import React, {Component} from 'react';
import {  getUsers, getUserById, updateUser, getUser } from '../../actions/UserActions';
import { connect } from 'react-redux';
import AllChar from './allChar';

import "./main.css";
import DragDrop from "../dragDrop/index.js"
import update from 'immutability-helper';


class Main extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            age: "",
            location: "",
            picture: "",
            dragDrop: false,
            id: "",
        }
    }

    submitFile = file => {
        updateUser({ picture: file }, this.state.id);
        file = URL.createObjectURL(file);
        this.setState({ picture: file, dragDrop: false })
      };
    renderDragDrop = e => {
        e.stopPropagation();
        this.setState({ dragDrop: !this.state.dragDrop });
      };
    
    componentDidMount = () => {
        this.props.getUser();
        this.props.getUsers();
        let user = window.localStorage.getItem("user");
        user = JSON.parse(user);
        this.setState({
            name: user.name,
            age: user.age,
            location: user.location,
            picture: user.picture,
            id: user._id
        })        
      };
 

  renderDragDrop = e => {
    e.stopPropagation();
    this.setState({ dragDrop: !this.state.dragDrop });
  };

    render () {
        console.log("STATE",this.state)
        console.log("USER", window.localStorage.getItem("user"));
        const { users, user } = this.props;
        console.log("user-info", this.props.user)
        let modal = null;
        if (this.state.dragDrop) {
          modal = (
            <DragDrop
              renderDragDrop={this.renderDragDrop}
              submitFile={this.submitFile}
            />
          );
        }
      let  hp = () => {
            let num = this.state.age * 50;
            return num;
          }
          let  mp = () => {
            let num = this.state.age * 10;
            return num;
          }
        return (
            <div className="main-container">
     <div className='main'>
     {modal}
        <div>
        <img className='char_pic'
         id="pic" 
         src= {this.state.picture}  
         alt="Generic placeholder" 
         onClick={e => {
            this.renderDragDrop(e);
          }}
         />
        </div>
        <div className="stats" >
        <h1 className="name">{this.state.name}</h1>
         <span className="level_lable">LV<span className="level">{this.state.age}</span></span>
         <span className="level_lable">HP<span className="level_num">{hp()}/{hp()}</span></span>
         <span className="level_lable">MP<span className="level_num">{mp()}/{mp()}</span></span>
        </div>
     </div>
     <div className="idkyet">
          {      users.map((user, i) => {
                   const { _id, username } = user;
                   console.log("users", user._id)
                   return (
                       <AllChar
                       key={_id}
                       id={_id}
                       index={i}
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
        user: state.UsersReducer
    }
}

export default connect(mSTP, { getUsers, getUserById, updateUser, getUser })(Main);