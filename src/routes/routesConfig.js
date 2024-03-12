import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';
import ReservePage from '../pages/reserve/ReservePage';
import RootTranslation from '../pages/translation/root/RootTranslation';

export const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    title: 'Главная',
    isShow: false,
    component: RootHome,
    options: { headerShown: false },
  },

  cart: {
    id: 1,
    name: 'Cart',
    title: 'Меню продуктов',
    isShow: true,
    component: RootCart,
    options: { headerShown: false },
  },
  checking: {
    id: 2,
    name: 'Checking',
    title: 'Бронь столика',
    component: ReservePage, 
    isShow: true,
    options: { headerShown: false }
  },

  basket: {
    id: 3,
    name: 'Basket',
    title: 'Корзина',
    isShow: true,
    component: RootBasket,
    options: { headerShown: false },
  },

  translation: {
    id: 4,
    name: 'Translation',
    title: 'Трансляции',
    component: RootTranslation,
    isShow: true,
    options: { headerShown: false }
  },
  celebrations: {
    id: 5,
    name: 'Celebrations',
    title: 'События',
    component: RootTranslation, //компонет события
    isShow: true,
    options: { headerShown: false }
  },
  numbers: {
    id: 6,
    name: 'Numbers',
    title: 'Контакты',
    component: RootTranslation, //компонет контакты
    isShow: true,
    options: { headerShown: false }
  }
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
