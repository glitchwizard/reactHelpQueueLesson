import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import { connect } from 'react-redux';

function Admin({ticketList, currentRouterPath, selectedTicket}) {
  let optionalSelectedTicketContent = null;
  if (selectedTicket.length > 0){
    optionalSelectedTicketContent = <TicketDetail selectedTicket={ticketList[selectedTicket]} />;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={ticketList}
        currentRouterPath={currentRouterPath} />
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTicket: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTicket: state.selectedTicket,
    ticketList: state.masterTicketList
  };
};

export default connect(mapStateToProps)(Admin);
