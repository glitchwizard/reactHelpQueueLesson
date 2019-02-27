import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Ticket({location, names, formattedWaitTime, currentRouterPath, onTicketSelection, ticketId}){

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TICKET',
      ticketId: ticketId
    };
    dispatch(action);
  }

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
      <div onClick={() => {handleSavingSelectedTicket(ticketId);}}>
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
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
