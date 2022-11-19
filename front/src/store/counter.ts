const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const initialState = { count: 0 };

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

function counterReducer(state = initialState, action: { type: any; }) {
  switch (action.type) {
    case INCREASE:
      return {
        count: state.count + 1,
      };
    case DECREASE:
      return {
        count: state.count - 1,
      };
    default:
      return {
        count: state.count,
      };
  }
}

export default counterReducer;