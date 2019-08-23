import React from 'react';
// import { connect } from 'react-redux';
import MainScreen from './components/DrawerNavigator';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Header from './components/Header';

// npx react-native run-android - Executar React Native
// adb shell input keyevent 82 - Abrir menu no Android

// const HomeScreen = () => {
//     return (
//         <View>
//             <Text>Teste</Text>
//         </View>
//     )
// }



// const HomeScreen = createDrawerNavigator({
//     screen1: { screen: Screen1 }
// }, {
//         contentComponent: DrawerContainer,
//         headerTitle: 'Opções'
//     });

const Routes = createAppContainer(
    createStackNavigator({
        Home: { screen: MainScreen }
    }, {
            initialRouteName: 'Home',
            defaultNavigationOptions: {
                headerTitle: <Header />,
                headerStyle: {
                    backgroundColor: '#2196f3'
                },
            },
            navigationOptions: {
                tabBarLabel: "Olar"
            }
        })
);

export default Routes;