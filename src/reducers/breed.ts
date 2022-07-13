import { Theme } from "../APIResponsesTypes";
import { Action } from "../actionCreators/changeBreed";

export default function breed(state = "darkblue" as Theme, action: Action) {
  switch (action.type) {
    case "CHANGE_BREED":
      return action.payload;
    case "CHANGE_ANIMAL":
      return "";
    default:
      return state;
  }
}
