import React from 'react';
import Moment from 'moment';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import constantsImport from './../../src/constants';
const {constants} = constantsImport;
import PropTypes from 'prop-types';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: constants.ADD_TICKET,
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment(),
      formattedWaitTime: new Moment().fromNow(true)
    };
    dispatch(action);
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}><p></p>
        <input
          type ='text'
          id='names'
          placeholder= 'Pair Names'
          ref={(input) => {_names = input;}}/>
        <p></p>
        <input
          type= 'text'
          id = 'location'
          placeholder= 'Location'
          ref={(input) => {_location = input;}}/>
        <p></p>
        <textarea
          id= 'issue'
          placeholder= 'Describe your issue'
          ref={(textarea) => {_issue = textarea;}}/>
        <p></p>
        <button type='submit'> Help !</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(NewTicketForm);
