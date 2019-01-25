import {
  ACTION
} from '../actions';


function models(state = [], action) {
  switch (action.type) {
    case ACTION:
      return [
        ...state,
        {
          text: action.text,
        }
      ];
    default:
      return state
  }
}

export default models;