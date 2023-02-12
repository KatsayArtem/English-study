import { MAINPAGE_ROUTE, WRITE_E_R_ROUTE, DRAGDROP_E_R_ROUTE, WRITE_R_E_ROUTE, DRAGDROP_R_E_ROUTE, DICTIONARY_ROUTE, NOTFOUND_ROUTE } from './path'
import { MAINPAGE, WRITE_E_R, DRAGDROP_E_R, WRITE_R_E, DRAGDROP_R_E, DICTIONARY, NOTFOUND } from './components'

export const publicRoutes = [
    {
        path: MAINPAGE_ROUTE,
        component: MAINPAGE
    },
    {
        path: WRITE_E_R_ROUTE,
        component: WRITE_E_R
    },
    {
        path: DRAGDROP_E_R_ROUTE,
        component: DRAGDROP_E_R
    },
    {
        path: WRITE_R_E_ROUTE,
        component: WRITE_R_E
    },
    {
        path: DRAGDROP_R_E_ROUTE,
        component: DRAGDROP_R_E
    },
    {
        path: DICTIONARY_ROUTE,
        component: DICTIONARY
    },
    {
        path: NOTFOUND_ROUTE,
        component: NOTFOUND
    }
]