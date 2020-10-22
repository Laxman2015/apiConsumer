import initialState from './initialState';

export default function BookReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BOOKLISTS":
      return {
        ...state,
        bookLists: action.payload
      };
    
    default:
      return state;
  }
}
