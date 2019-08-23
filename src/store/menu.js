import { TOGGLE_MENU } from './actions';

const initialState = {
    drawerMenuIsOpen: false
};

const drawerMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                drawerMenuIsOpen: action.drawerMenuIsOpen
            }
        default:
            return state;
    }
}

export default drawerMenuReducer;