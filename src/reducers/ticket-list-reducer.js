import constantsImport from './../../src/constants';
const { constants } = constantsImport;

export default (state = {}, action) => {
  let newState;
  const { names, location, issue, timeOpen, id, formattedWaitTime } = action;

  switch (action.type){
  case constants.ADD_TICKET:
    newState = Object.assign({}, state, {
      [id]:{
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: formattedWaitTime
      }
    });
    return newState;

  case constants.UPDATE_TIME: {
    const newTicket =Object.assign({}, state[id], {formattedWaitTime});
    newState = Object.assign({}, state, { [id]: newTicket });

    return newState;
  }

  default:
    return state;
  }
};
