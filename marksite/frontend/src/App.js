import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Time from './components/time/time';
import Main from './components/main/main';
import Location from './components/time/location';
import EditWork from './components/experience/editWork';
import MenuBar from './components/menuBar/menuBar';
import TopBar from './components/menuBar/topBar';
import Work from './components/experience/work';
import Login from './components/login/login';
import Skills from './components/skills/skills';
import Interests from './components/interests/interests';
import CharEdit from './components/main/charEdit';


export default class App extends Component {
  render() {
    return (
       <div className="logdiv">
         <Route exact path='/' component={Login}/>
        <div className="App">
         <div className="app_main">
         <Route path ='/main/:anything' component={TopBar}/>
         <Route exact path ='/main/charedit' component={CharEdit}/>
         <Route exact path ='/main/exp' component={Work}/>
         <Route exact path='/main/exp/:index' component={EditWork} />
         <Route exact path='/main/skills' component={Skills} />
         <Route exact path='/main/interests' component={Interests} />
         <Route exact path='/main' component={Time}/>
         <Route exact path='/main' component={Location}/>
         <Route exact path='/main' component={MenuBar}/>
         <Route exact path='/main' component={Main}/>
        </div>
      </div>
      </div>
    );
  }
}

