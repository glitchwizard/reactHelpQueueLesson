import React from 'react';
import Ticket from './Ticket';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg';
import PropTypes from 'prop-types';

function TicketList(props) {
  console.log(props.ticketList);

  return (
    <div>
      <hr/>
        {props.ticketList.map((ticket) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            formattedWaitTime={ticket.formattedWaitTime}
            key={ticket.id}/>
      )}
      <img src={cutestpuppyever} style={{ maxHeight: '400px' }} />
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
