import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
    console.log(state.count)
    return {
      ...state,
      count: action.payload + 1
    }
    // ++state.count
    //Why doesn't this work?
    console.log(state.count)
    // return state;
    case DECREMENT:
    // Fill in the body of this case
    console.log(state)
    return {
      ...state,
      count: action.payload - 1
    }
    // ++sta
    // --state.count
    console.log(state)
    // return state;
    default:
      return state;
  }
};