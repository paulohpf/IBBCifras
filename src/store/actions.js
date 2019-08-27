import { TOGGLE_MENU, GET_TABS, BOOKMARK_TAB } from './types';

export const toggle_menu = (data) => {
    return {
        type: TOGGLE_MENU,
        menudrawerMenuIsOpen: data.menudrawerMenuIsOpen
    }
}

export const get_tabs = (data) => {
    return {
        type: GET_TABS,
        total: data.total,
        offset: data.offset,
        rows: data.rows,
        tabs: data.tabs
    }
}

export const bookmark_tab = (data) => {
    return {
        type: BOOKMARK_TAB,
        tabs: data.tabs
    }
}