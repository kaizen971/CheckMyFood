// usersReducer.js

const initialState = {
    items: [],
  };

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
      // handle actions
    case 'PUSH_ITEMS':
        console.log('PUSH_ITEMS', action.payload);
        const tabInitiale = [...state.items];
        tabInitiale.push(action.payload);
        return {
          ...state,
          items: tabInitiale
        };
    case 'DELETE_ITEM':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        }; 
    default:
        return state;
    }
  }