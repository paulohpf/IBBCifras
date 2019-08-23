import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
// import Icon from 'react-native-vector-icons/MaterialIcons';

import { Header, MenuItem, MenuItemInput, IconStyled } from "./styles";

export default function Navbar() {

    const onHamburgerClick = function () {
        console.log('Hamburger');
    }

    const onBookmarkClick = function () {
        console.log('Bookmark');
    }

    return (
        <Header>
            <MenuItem
            onPress={onHamburgerClick}>
                <IconStyled.Button
                style={{
                    backgroundColor: '#2196f3'
                }}
                    name="menu"
                />
            </MenuItem>
             <MenuItemInput>
                <IconStyled
                    name="search"
                />
                <TextInput
                    placeholder="Pesquisar"
                    placeholderTextColor="#fff8"
                />
            </MenuItemInput>
            <MenuItem
                onPress={onBookmarkClick}>
                <IconStyled.Button
                    name="bookmark"
                    style={{
                        backgroundColor: '#2196f3'
                    }}
                />
            </MenuItem>
        </Header>
    )
}