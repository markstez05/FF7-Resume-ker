import React, {Component} from 'react';
import {  getUsers, getUserById, updateUser, getUser } from '../../actions/UserActions';
import { getMedia } from '../../actions/MediaActions';
import axios from 'axios';
import { connect } from 'react-redux';
import AllChar from './allChar';
import "./main.css";


class Main extends Component {
    constructor(props){
        super();
        this.state = {
            name: "",
            age: "",
            location: "",
            image: null,
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
    
      handleSubmit = (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('picture', this.state.image);
        // let url = `https://ff7backend.herokuapp.com/api/users/${id._id}`;
        const id = window.localStorage.getItem("user");
        const token = window.localStorage.getItem("user_photo") || null;
        const config = { headers: { "Authorization": `Bearer ${token}` } };
        console.log('IDIDID', id, id.username);
        // axios.put(url, form_data, {
        //   headers: {
        //     'content-type': 'multipart/form-data',
        //     "Authorization": `Bearer ${token}`
        //   }
        // })
        // this.setState({ dragDrop: !this.state.dragDrop });
      };
    componentDidMount = () => {
        this.props.getUser();
        this.props.getUsers();
        this.props.getMedia();
        this.props.getUserById();
        let user = window.localStorage.getItem("user");
        user = JSON.parse(user);
        this.setState({
            name: user.name,
            age: user.age,
            location: user.location,
            picture: this.props.userPicture,
            id: user._id
        })        
      };
 

    render () {
        const { users, user, photo } = this.props;
        console.log('USERREAL', users);
        console.log('Photo', photo);
        console.log('IMAGE STATE', this.state.image)
        console.log('USE32432R', window.localStorage.getItem("user"))
        let modal = null;
        if (this.state.dragDrop) {
          modal = (
            <div className="App">
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
         src="l"
         alt="Generic placeholder" 
         onClick={e => {
            this.renderDragDrop(e);
          }}
         />
        </div>
        <div className="stats" >
        <h1 className="name">{this.state.name}</h1>
         <span className="level_lable">LV<span className="level">{this.props.user.age}</span></span>
         <span className="level_lable">HP<span className="level_num">{hp()}/{hp()}</span></span>
         <span className="level_lable">MP<span className="level_num">{mp()}/{mp()}</span></span>
        </div>
     </div>
     <div className="idkyet">
          {      users.map((user, i) => {
                   const { _id, username, picture } = user;
                   console.log('PCITUR', user.picture);
                   return (
                       <AllChar
                       key={_id}
                       id={_id}
                       index={i}
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
        photo: state.MediaReducer,
        users: state.UsersReducer,
        user: state.UserReducer,
        userPicture: state.MediaReducer
    }
}

export default connect(mSTP, { getMedia, getUsers, getUserById, updateUser, getUser })(Main);