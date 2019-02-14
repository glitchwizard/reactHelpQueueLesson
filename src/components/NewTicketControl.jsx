import React from 'react';

class NewTicketControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibileOnPage: false
        };
    }

    handleClick(){
        console.log('Hey, you clicked me. Quit that poking around and get something done.')
    }

    render(){
        return (
            <div>
                <p>This is the NewTicketControl component!</p>
                <strong onClick={this.handleClick}>Click me to change my state!</strong>
            </div>
        );
    }
}

export default NewTicketControl;