import { createStore, combineReducers } from 'redux';
import drawerMenu from './menu';

const rootReducer = combineReducers({
    drawerMenu: drawerMenu
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;