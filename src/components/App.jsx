import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

class App extends React.Component {

  handleAddingNewTicketToList(newTicket){
    let newMasterTicketList = this.state.masterTicketList.slice();
     newMasterTicketList.push(newTicket);
     this.setState({masterTicketList: newMasterTicketList});
 }

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newTicket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />}  />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
