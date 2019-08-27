import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { get_tabs, bookmark_tab } from '../../store/actions';
import { FlatList } from 'react-native-gesture-handler';

import { TabListItem, ViewTitle, IconStyled, StyledText, TouchableOpacityStyled, ViewIcon, renderItemSeparator, IconBookmarkStyled, Loading } from './styles';

const MainScreen = ({ tabs, dispatch }) => {
    const [loading, setLoading] = useState(false);

    async function loadTabs(offset = tabs.offset) {
        if (tabs.total && tabs.tabs.length > tabs.total) return;

        setLoading(true);

        try {
            const response = await fetch(
                `http://cifras.betel-bauru.com.br/?offset=${offset}&limit=20`
            );

            const data = await response.json();

            offset = (tabs.tabs.length + data.tabs.length);
            let tabsList = [...tabs.tabs, ...data.tabs];

            dispatch(get_tabs({ ...data, offset: offset, tabs: tabsList }));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error)
        }
    }

    useEffect(() => {
        loadTabs();
    }, [])

    const ListItem = (item, index) => {

        function handleOnclickBookmark() {
            let _tabs = tabs.tabs;

            _tabs[index].selected = !_tabs[index].selected;
            dispatch(bookmark_tab({ tabs: _tabs }));
        }

        return <TabListItem>
            <ViewTitle>
                <TouchableOpacityStyled>
                    <IconStyled
                        name="playlist-play"
                    />
                    <StyledText>{item.title}</StyledText>
                </TouchableOpacityStyled>
            </ViewTitle>
            <ViewIcon onPress={handleOnclickBookmark}>
                <IconBookmarkStyled bookmarked={item.selected}
                />
            </ViewIcon>
        </TabListItem>
    };

    const _MainScreen = (
        <View>
            <FlatList
                data={tabs.tabs}
                extraData={tabs.tabs}
                keyExtractor={(tab) => String(tab.id)}
                onEndReached={() => loadTabs()}
                onEndReachedThreshold={0.1}
                renderItem={({ item, index }) => (ListItem(item, index))}
                ListFooterComponent={loading && <Loading />}
                ItemSeparatorComponent={renderItemSeparator}
            />
        </View>
    );

    return _MainScreen;
}

export default connect(state => ({
    tabs: state.tabs
}))(MainScreen);