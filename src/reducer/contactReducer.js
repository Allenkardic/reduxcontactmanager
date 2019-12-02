import {
  GET_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT
} from "../action/type";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  const { items } = state;
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        item: action.payload
      };

    case GET_CONTACTS:
      return {
        ...state,
        items: action.payload
      };

    case DELETE_CONTACT:
      return {
        ...state,
        items: items.filter((item) => item.id !== action.payload)
      };

    case ADD_CONTACT:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? (item = action.payload) : item
        )
      };

    default:
      return state;
  }
}
