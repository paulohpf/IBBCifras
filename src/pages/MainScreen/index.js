import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createDrawerNavigator } from 'react-navigation';
import DrawerContainer from '../../components/DrawerContainer';

const MainScreen = ({modules, dispatch}) => {

    console.log(modules);
    console.log(dispatch);

    const _MainScreen = (
        <View>
            <Text>Teste</Text>
        </View>
    );

    return _MainScreen;
}

// const drawerNavigation = createDrawerNavigator({
//     MainScreen: {
//         screen: MainScreen
//     }
// }, {
//         contentComponent: DrawerContainer,
//         headerTitle: 'Opções'
//     }
// );

export default connect(state => ({
    modules: state
}))(MainScreen);