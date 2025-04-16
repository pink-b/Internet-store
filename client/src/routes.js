import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, DEVICE_ROUTE  } from "./utils/consts"
import Admin from './page/Admin'
import Basket from './page/Basket'
import Login from './page/Login'
import Auth from './page/Auth'
import DevicePage from './page/DevicePage'
import Shop from './page/Shop'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    }
]