import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function Ticket({location, names, issue}){
  return (
    <div>
      <style global jsx>{`
            div {
                background-color: red;
            }
            div:onclick {
                background-color: blue;
            }
            `}</style>
      <h3>{location} - {names}</h3>
      <h4>{displayTimeOpen(props.formattedWaitTime)} ago</h4>
      <p><em>{issue}</em></p>
      <hr/>
    </div>
  );
}

function displayTimeOpen(timeOpen){
  return timeOpen.from(new Moment(), true);
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.instanceOf(Moment).isRequired
};

export default Ticket;