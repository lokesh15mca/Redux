import { AddOne, SubOne } from "./action";
// import { addCount, subCount } from "./actions";

const init = {
  count: 10
};
export const reducer = (state = init, { type, payload }) => {
  console.log("state ", state, "type", type);
  switch (type) {
    case "Add_One":
      return {
        ...state,
        count: state.count + payload
      };
    case "Sub_One":
      return {
        ...state,
        count: state.count - payload
      };
    default:
      return { ...state };
  }
};
