import React, { Component } from 'react';
import axios from 'axios';

class DragDrop extends Component {
  state = {
    image: null
  };


  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('picture', this.state.image);
    let url = "http://localhost:8081/api/media/images";
    const token = window.localStorage.getItem("user_photo") || null;
    const config = { headers: { "Authorization": `Bearer ${token}` } };
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data',
        "Authorization": `Bearer ${token}`
      }
    })
    this.setState({ dragDrop: !this.state.dragDrop });
  };

  render() {
    return (
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
}

export default DragDrop;
