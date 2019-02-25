import React from 'react';
import Ticket from './Ticket';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg';
import PropTypes from 'prop-types';

function TicketList(props) {

  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={ticket.id}
          onTicketSelection={props.onTicketSelection} />
      )}
      <img src={cutestpuppyever} style={{ maxHeight: '400px' }} />
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
