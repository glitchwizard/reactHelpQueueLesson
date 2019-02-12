import React from "react";

function Ticket({location, names, issue}){
    return (
        <div>
            <h3>{location} - {names}</h3>
            <p><em>{issue}</em></p>
            <hr/>
        </div>
    );
}

export default Ticket;