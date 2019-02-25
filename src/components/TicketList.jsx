import React from 'react';
import Ticket from './Ticket';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg';
import PropTypes from 'prop-types';

function TicketList(props) {

  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map( function(ticketId) {
        let ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        formattedWaitTime={ticket.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        key={ticketId}
        onTicketSelection={props.onTicketSelection} 
        ticketId={ticketId}/>
      })}
      <img src={cutestpuppyever} style={{ maxHeight: '400px' }} />
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default TicketList;
