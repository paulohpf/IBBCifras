import { GET_TABS } from '../types';

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
        default:
            return state;
    }
}

export default tabsReducer;