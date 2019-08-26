import { createStore, combineReducers } from 'redux';
import drawerMenu from './menu';
import tabs from './tabs';

const rootReducer = combineReducers({
    drawerMenu: drawerMenu,
    tabs: tabs
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;