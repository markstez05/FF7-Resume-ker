import React, {Component} from 'react';
import "./main.css";
import DragDrop from "../dragDrop/index.js"


class Main extends Component {
    constructor(props){
        super();
        this.state = {
            dragDrop: true
        }
    }

  renderDragDrop = e => {
    e.stopPropagation();
    this.setState({ dragDrop: !this.state.dragDrop });
  };

    render () {
        return (
            <div>
     <div className='main'>
        <div>
        <img className='char_pic' id="pic" src="https://pbs.twimg.com/profile_images/1267009503/ff7-cid2_400x400.jpg"  alt="Generic placeholder" />
        </div>
        <div className="stats" >
        <h1 className="name">Mark Stesney</h1>
         <span className="level_lable">LV<span className="level">11</span></span>
         <span className="level_lable">HP<span className="level_num">550/550</span></span>
         <span className="level_lable">MP<span className="level_num">110/110</span></span>
          {/* { this.state.dragDrop ? (<DragDrop 
         renderDragDrop={this.renderDragDrop}
          />):null} */}
        </div>
     </div>
     </div>
        )
    }
}

export default Main;