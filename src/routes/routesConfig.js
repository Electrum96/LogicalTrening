import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';
import RootTranslation from '../pages/translation/root/RootTranslation';

export const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    title: 'Главная',
    isShow: false,
    component: RootHome,
    options: {headerShown: false},
  },

  cart: {
    id: 2,
    name: 'Cart',
    title: 'Меню продуктов',
    isShow: true,
    component: RootCart,
    options: {headerShown: false},
  },

  basket: {
    id: 3,
    name: 'Basket',
    title: 'Корзина',
    isShow: true,
    component: RootBasket,
    options: {headerShown: false},
  },

  translation:{
    id:4,
    name: 'Translation',
    title: 'Трансляции',
    component: RootTranslation,
    isShow: true,
    options: {headerShown: false}
  }
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
