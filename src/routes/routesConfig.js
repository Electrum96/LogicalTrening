import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';

const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    component: RootHome,
    options: {headerShown: false},
  },

  cart: {
    id: 2,
    name: 'Cart',
    component: RootCart,
    options: {headerShown: false},
  },
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
