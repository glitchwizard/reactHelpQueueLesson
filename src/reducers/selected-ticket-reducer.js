import constants from './../constants';

export default (state = {}, action) => {
  switch (action.type) {
  case constants.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
