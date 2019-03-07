import constantsImport from './../constants';
const { firebaseConfig , constants } = constantsImport;
import Firebase from 'firebase';
import Moment from 'moment';

firebase.initializeApp(firebaseConfig);
const tickets = firebase.database().ref('tickets');

export function addTicket (_names, _location, _issue) {
  return () => tickets.push({
    names: _names,
    location: _location,
    issue: _issue,
    timeOpen: new Date().getTime()
  });
}

export function watchFirebaseTicketsRef() {
  return function(dispatch) {
    tickets.on('child_added', data => {
      const newTicket = Object.assign({}, data.val(), {
        id: data.getKey(),
        formattedWaitTime: new Moment(data.val().timeOpen).from(new Moment())
      });
      dispatch(receiveTicket(newTicket));
    });
  };
}

function receiveTicket(ticketFromFirebase) {
  return {
    type: constants.RECEIVE_TICKET,
    ticket: ticketFromFirebase
  };
}