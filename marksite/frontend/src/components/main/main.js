import React, {Component} from 'react';
import { Progress } from 'reactstrap';
import "./main.css";

class Main extends Component {
    render () {
        return (
            <div>
     <div className='main'>
        <div>
        <img className='char_pic' id="pic" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/19904888_10209584905126356_7157597337840962614_n.jpg?_nc_cat=0&oh=9e71fddbf168cf39ae407ae1923936f2&oe=5BD55437"  alt="Generic placeholder" />
        </div>
        <div className="stats" >
        <h1 className="name">Mark Stesney</h1>
         <span className="level_lable">LV<span className="level">11</span></span>
         <span className="level_lable">HP<span className="level_num">550/550</span></span>
         <span className="level_lable">MP<span className="level_num">110/110</span></span>
        </div>
        <div className="progress_bar">
        <h1 className="class">Class: Professional</h1>
            <div className="text-center">next Level</div>
            <Progress value="100"/>
            <div className="text-center">Limit Level</div>
            <Progress value="100" />
        </div>
     </div>
     <div className='main'>
        <div>
        <img className='char_pic' src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/17191420_10208558062095922_2735872353544272674_n.jpg?_nc_cat=0&oh=9f46dec538f4c841a81cde60d121531d&oe=5BDC065E"  alt="Generic placeholder" />
        </div>
        <div className="stats" >
        <h1 className="name">Mark Stesney</h1>
         <span className="level_lable">LV<span className="level">31</span></span>
         <span className="level_lable">HP<span className="level_num">1550/1550</span></span>
         <span className="level_lable">MP<span className="level_num">310/310</span></span>
        </div>
        <div className="progress_bar">
            <h1 className="class">Class: Casual</h1>
            <div className="text-center">next Level</div>
            <Progress value="25"/>
            <div className="text-center">Limit Level</div>
            <Progress value="75" />
        </div>
     </div>
     </div>
        )
    }
}

export default Main;