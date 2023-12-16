import { MENU_ACTION_TYPES } from "./about-action";
const initialState = {
  items: [],
  selectedItem: {},
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case MENU_ACTION_TYPES.FETCH_MENU:
      return {
        ...state,
        items: action.payload,
      };

    case MENU_ACTION_TYPES.DETAIL_MENU:
      return {
        ...state,
        selectedItem: action.payload,
      };

    case MENU_ACTION_TYPES.ADD_MENU:
      return {
        ...state,
        selectedItem: action.payload,
        items: [...state.items, action.payload],
      };

    case MENU_ACTION_TYPES.UPDATE_MENU:
      return {
        ...state,
        selectedItem: action.payload,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) return action.payload;
          else return item;
        }),
      };
    case MENU_ACTION_TYPES.DELETE_MENU:
      return {
        ...state,
        selectedItem: undefined,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
