import {
  DELETE_VISIBLE,
  DELETE_INVISIBLE,
} from "../actions/deleteVisible.actions";
const INITIAL_STATE = {
  delete: false,
};

const DeleteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DELETE_VISIBLE:
      return {
        ...state,
        delete: action.payload,
      };
    case DELETE_INVISIBLE:
      return {
        ...state,
        delete: action.payload,
      };
    default:
      return state;
  }
};
export default DeleteReducer;
