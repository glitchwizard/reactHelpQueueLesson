import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg'
import NewTicketForm from './NewTicketForm';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <TicketList/>
      <img src={cutestpuppyever} style={{maxHeight: '400px'}}/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newTicket' component={NewTicketForm} />
      </Switch>
    </div>
  );
}

export default App;
