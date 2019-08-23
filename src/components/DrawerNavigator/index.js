import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import MainScreen from '../../pages/MainScreen';
import DrawerContainer from '../DrawerContainer/';

const drawerNavigation = createDrawerNavigator({
    MainScreen: {
        screen: MainScreen
    }
}, {
        contentComponent: DrawerContainer,
        headerTitle: 'Opções'
    }
);

export default drawerNavigation;