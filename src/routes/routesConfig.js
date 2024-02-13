import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';
import RootTranslation from '../pages/translation/root/RootTranslation';
import FirstPage from '../pages/cart/fistPage/FirstPage';

export const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    title: 'Главная',
    isShow: true,
    icon: 'house',
    component: RootHome,
    options: {headerShown: false},
  },

  cart: {
    id: 1,
    name: 'RootCart',
    title: 'Меню',
    isShow: true,
    icon: 'utensils',
    component: FirstPage,
    options: {headerShown: false},
  },

  reserve: {
    id: 2,
    name: 'RootReserve',
    title: 'Резерв',
    icon: 'user-tie',
    isShow: true,
    component: RootBasket,//здесь будет страница резерва
    options: {headerShown: false},
  },
  events: {
    id: 3,
    name: 'RootEvents',
    title: 'События',
    icon: 'calendar-days',
    isShow: true,
    component: RootBasket,//здесь будет страница события
    options: {headerShown: false},
  },

  translation:{
    id:4,
    name: 'RootTranslation',
    title: 'Трансляции',
    icon: 'futbol',
    component: RootTranslation,
    isShow: true,
    options: {headerShown: false}
  },
  contacts:{
    id:5,
    name: 'RootContacts',
    title: 'Контакты',
    icon: 'address-book',
    component: RootTranslation,// здесь будет страница контакты
    isShow: true,
    options: {headerShown: false}
  },
  basket: {
    id: 6,
    name: 'Basket',
    title: 'Корзина',
    isShow: false,
    component: RootBasket,
    options: {headerShown: false},
  },
  firstPage: {
    id: 7,
    name: 'FirstPage',
    title: 'Меню кнопок',
    isShow: false,
    icon: 'utensils',
    component: RootCart,
    options: {headerShown: false},
  },
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
