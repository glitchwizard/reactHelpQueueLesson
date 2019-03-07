import constantsImport from './../../src/constants';
const { constants } = constantsImport;

export default (state = {}, action) => {
  switch (action.type) {
  case constants.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
