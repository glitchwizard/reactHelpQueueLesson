import React from 'react';
import PropTypes from 'prop-types';

function Ticket({location, names, issue, formattedWaitTime}){
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
      <h4>{formattedWaitTime} ago</h4>
      <p><em>{issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;