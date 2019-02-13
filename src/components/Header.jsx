import React from 'react';
import { Link, BrowserRouter as Router} from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newTicket">Create Ticket</Link>
    </div>
  );
}

export default Header;
