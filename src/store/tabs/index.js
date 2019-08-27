import { GET_TABS, BOOKMARK_TAB } from '../types';

const initialState = {
    total: 0,
    offset: 0,
    rows: 0,
    tabs: []
};

const tabsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TABS:
            return {
                ...state,
                total: action.total,
                offset: action.offset,
                rows: action.rows,
                tabs: action.tabs
            }
            case BOOKMARK_TAB:
                return {
                    ...state,
                    tabs: action.tabs
                }
        default:
            return state;
    }
}

export default tabsReducer;