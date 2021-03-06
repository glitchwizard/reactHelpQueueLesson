import ticketListReducer from './../../src/reducers/ticket-list-reducer';
import constants from './../../src/constants';

describe('ticketListReducer', () => {

  let action;
  const sampleTicketData={
    names: 'Rayan & Aimen',
    location:'4b',
    issue: 'jest is being a diva and won\'t work with webpack!',
    timeOpen: 1500000000000,
    id:0
  };

    test('Should return default state if no action type is recognized', () =>  {
        expect(ticketListReducer({}, {type: null})).toEqual({});
    });

    test('should successfully add new ticket data to masterTicketList', () => {
      const{names, location, issue, timeOpen, id } = sampleTicketData;
      action={
        type:constants.ADD_TICKET,
        names:names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id
      };
      expect(ticketListReducer({}, action)).toEqual({
        [id]:{
          names: names,
          location: location,
          issue: issue,
          timeOpen: timeOpen,
          id: id
        }
      });
    });

    test('Should add freshly-calculated Moment-formatted wait time to ticket entry', () => {
     const { names, location, issue, timeOpen, id } = sampleTicketData;
     action = {
       type: constants.UPDATE_TIME,
       formattedWaitTime: '4 minutes',
       id: id
     };
     expect(ticketListReducer({ [id] : sampleTicketData }, action)).toEqual({
       [id] : {
         names: names,
         location: location,
         issue: issue,
         timeOpen: timeOpen,
         id: id,
         formattedWaitTime: '4 minutes'
       }
     });
   });
   test('New ticket should include Moment-formatted wait times', () => {
    const { names, location, issue, timeOpen, id } = sampleTicketData;
    action = {
      type: constants.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: new Moment().fromNow(true)
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: 'a few seconds'
      }
    });
  });
});
