import { TOGGLE_MENU, GET_TABS } from './types';

export const toggle_menu = (data) => {
    return {
        type: TOGGLE_MENU,
        menudrawerMenuIsOpen: data.menudrawerMenuIsOpen
    }
}

export const get_tabs = (data) => {
    console.log(data)
    return {
        type: GET_TABS,
        total: data.total,
        offset: data.offset,
        rows: data.rows,
        tabs: data.tabs
    }
}