import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTicketForm from './NewTicketForm';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibileOnPage: true});
  }

  render(){
    let currentlyVisbleContent = null;
    if (this.state.formVisibileOnPage){
      currentlyVisbleContent = <NewTicketForm />;
    } else {
      currentlyVisbleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisbleContent}
      </div>
    );
  }
}

export default NewTicketControl;