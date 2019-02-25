import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';

function Admin({ticketList, currentRouterPath, onTicketSelection, selectedTicket}) {
  let optionalSelectedTicketContent = null;
  if (selectedTicket != null){
    optionalSelectedTicketContent = <TicketDetail selectedTicket={ticketList[selectedTicket]} />
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList 
        ticketList={ticketList} 
        currentRouterPath={currentRouterPath} 
        onTicketSelection={onTicketSelection}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTicketSelection: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

export default Admin;