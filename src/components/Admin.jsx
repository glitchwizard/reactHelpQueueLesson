import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';

function Admin({ticketList, currentRouterPath}) {
  return (
    <div>
      <h2>Admin</h2>
      <TicketList ticketList={ticketList} currentRouterPath={currentRouterPath}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;