import {
  ADD_TWEET,
  DELETED_TWEET,
  SELECTED_TWEET,
  ADD_PLACE,
  LOAD_PLACES,
} from "../actions/items.actions";
import Place from '../../models/Place'

const INITIAL_STATE = {
  tweets: [],
  selected: null,
  places: [],
};

const TweetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        tweets: state.tweets.concat(action.payload),
      };
    case SELECTED_TWEET:
      return {
        ...state,
        selected: state.tweets.find((item) => item.id === action.payload),
      };
    case DELETED_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter((item) => item.id !== action.payload),
      };
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
            places: action.places.map(item => new Place(
                item.id.toString(),
                item.title,
                item.image,
                item.address,
            ))}
    default:
      return state;
  }
};
export default TweetReducer;
