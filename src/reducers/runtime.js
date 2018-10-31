import { AddUser } from '../action/index';

export function runtime(state = {}, action) {
  switch (action.type) {
    case AddUser:
      return state;

    default:
      return state;
  }
}
