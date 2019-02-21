import React from 'react';
import PropTypes from 'prop-types';

function Ticket({location, names, issue, formattedWaitTime, currentRouterPath}){

  const ticketInformation =
    <div>
      <style jsx>{`
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
    </div>;

  if (currentRouterPath === '/admin') {
    return (
      <div onClick={() => {alert('hey, you just clicked the ticket belonging to ' + names);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;