import React, { Component } from 'react';
import {  deleteWork, getWorkById } from '../../actions/WorkActions';
import { connect } from 'react-redux';


class WorkButton extends Component {


  render = () => {
  	const { id, title, index,  deleteWork, history } = this.props;
    return (
      <div className="exp_buttons">
      	<button id={id} className='work_button' onClick={() => history.push(`/main/exp/${index}`)}>{title}</button>
          {/* <button onClick={e => { getWorkById(id); }} className='work_button'>O</button> */}
        <button onClick={e => { deleteWork(id); }} className='work_button_1'>Drop</button>
      </div>
    );
  }
}

export default connect(null, { deleteWork, getWorkById })(WorkButton);