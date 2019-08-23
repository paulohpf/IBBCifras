import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import { StatusBar } from 'react-native';
import Routes from './routes';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <>
                <StatusBar barStyle="dark-content" backgroundColor="#2196f3" />
                <Routes />
            </>
        </Provider>
    )
}