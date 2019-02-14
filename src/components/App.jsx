import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg'

function App() {
  return ( 
    <div>
      <Header/>
      <TicketList/>
      <img src={cutestpuppyever} style={{maxHeight: '400px'}}/>
    </div>
  );
}

export default App;