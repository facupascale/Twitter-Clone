import {
  ADD_PLACE,
  LOAD_PLACES,
  DELETE_PLACE
} from "../actions/items.actions";
import Place from '../../models/Place'

const INITIAL_STATE = {
  selected: null,
  places: [],
};

const TweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ADD_PLACE:
        const newPlace = new Place(
            action.payload.id.toString(),
            action.payload.title,
            action.payload.image,
            action.payload.address
        )
        return {
            ...state,
            places: state.places.concat(newPlace),
        };
    case LOAD_PLACES:
        return {
            ...state,
            selected: state.places.find((item) => item.id.toString() === action.payload )}
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((item) => item.id.toString() !== action.payload)
      }
    default:
      return state;
  }
};
export default TweetReducer;
