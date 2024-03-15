import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootCart from '../pages/cart/root/RootCart';
import DonePage from '../pages/done/DonePage';
import EventArt from '../pages/events/eventArt/EventArt';
import EventBreakfast from '../pages/events/eventBreakfast/EventBreakfast';
import EventsFest from '../pages/events/eventFest/EventsFest';
import EventHockey from '../pages/events/eventHockey/EventHockey';
import EventsPage from '../pages/events/eventsPageRoot/EventsPage';
import RootHome from '../pages/home/root/RootHome';
import OrderedPage from '../pages/ordered/OrderedPage';
import ReservePage from '../pages/reserve/ReservePage';
import TakeInform from '../pages/takeInform/TakeInform';
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
    component: EventsPage, 
    isShow: true,
    options: { headerShown: false }
  },
  numbers: {
    id: 6,
    name: 'Numbers',
    title: 'Контакты',
    component: TakeInform,
    isShow: true,
    options: { headerShown: false }
  },
  done: {
    id: 7,
    name: 'Done',
    title: 'Зарезервировано',
    component: DonePage, 
    isShow: false,
    options: { headerShown: false }
  },
  ordered: {
    id: 8,
    name: 'Ordered',
    title: 'Заказ принят',
    component: OrderedPage,  
    isShow: false,
    options: { headerShown: false }
  },
  fest: {
    id: 9,
    name: 'EventFest',
    title: 'EventFest',
    component: EventsFest,  
    isShow: false,
    options: { headerShown: false }
  },
  breakfast: {
    id: 10,
    name: 'EventBreakfast',
    title: 'EventBreakfast',
    component: EventBreakfast,  
    isShow: false,
    options: { headerShown: false }
  },
  hockey: {
    id: 11,
    name: 'EventHockey',
    title: 'EventHockey',
    component: EventHockey,  
    isShow: false,
    options: { headerShown: false }
  },
  art: {
    id: 12,
    name: 'EventArt',
    title: 'EventArt',
    component: EventArt,  
    isShow: false,
    options: { headerShown: false }
  }
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
