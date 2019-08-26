import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { get_tabs } from '../../store/actions';
import { FlatList } from 'react-native-gesture-handler';

import { TabListItem, TabTitle, IconStyled, StyledText } from './styles';

const MainScreen = ({ tabs, dispatch }) => {
    useEffect(() => {
        async function loadTabs() {
            try {
                const response = await fetch(
                    'http://cifras.betel-bauru.com.br'
                );

                const data = await response.json();

                dispatch(get_tabs(data));
            } catch (error) {
                console.error(error)
            }
        }

        loadTabs();
    }, [])

    console.log(tabs.tabs);

    const _MainScreen = (
        <View>
            <FlatList
                data={tabs.tabs}
                keyExtractor={tab => String(tab.id)}
                renderItem={({ item }) => (
                    <TabListItem>
                        <IconStyled
                            name="playlist-play"
                        />
                        <TabTitle><StyledText>{item.title}</StyledText></TabTitle>
                        <IconStyled
                            name="bookmark"
                        />
                    </TabListItem>
                )}
            />
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
    tabs: state.tabs
}))(MainScreen);