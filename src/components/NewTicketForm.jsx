import React from 'react';

function NewTicketForm(){
  return(
    <div>
      <form><p></p>
        <input type ='text' id='names' placeholder= 'Pair Names'/><p></p>
        <input type= 'text' id = 'location' placeholder= 'Location'/><p></p>
        <textarea id= 'issue' placeholder= 'Describe your issue'/><p></p>
        <button type='submit'> Help !</button>
      </form>
    </div>
  );
}

export default NewTicketForm;
