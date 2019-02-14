import React from 'react';
import Ticket from './Ticket';
import cutestpuppyever from '../assets/images/cutestpuppyever.jpg';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList() {
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) => 
        <Ticket names = {ticket.names}
          location = {ticket.location}
          issue = {ticket.issue} 
          key={index} />
      )}
      <img src={cutestpuppyever} style={{ maxHeight: '400px' }} />
    </div>
  );
}

export default TicketList;