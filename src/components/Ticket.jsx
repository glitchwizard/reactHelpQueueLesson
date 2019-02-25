import React from 'react';
import PropTypes from 'prop-types';

function Ticket({location, names, issue, formattedWaitTime, currentRouterPath, onTicketSelection}){

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
      <hr/>
    </div>;

  if (currentRouterPath === '/admin') {
    return (
      <div onClick={() => {onTicketSelection({names: names, location: location, issue: issue, formattedWaitTime: formattedWaitTime});}}>
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
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;