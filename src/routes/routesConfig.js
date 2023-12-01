import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';

const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    title: 'Главная',
    isShow: true,
    component: RootHome,
    options: {headerShown: false},
  },

  cart: {
    id: 2,
    name: 'Cart',
    title: 'Меню',
    isShow: true,
    component: RootCart,
    options: {headerShown: false},
  },
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
