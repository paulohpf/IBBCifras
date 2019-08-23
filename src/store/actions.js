import { TOGGLE_MENU } from './types';

export const toggle_menu = (data) => {
    return {
        type: TOGGLE_MENU,
        menudrawerMenuIsOpen: data.menudrawerMenuIsOpen
    }
}