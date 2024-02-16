import RootBasket from '../pages/basket/rootBasket/RootBasket';
import RootCart from '../pages/cart/root/RootCart';
import RootHome from '../pages/home/root/RootHome';
import RootTranslation from '../pages/translation/root/RootTranslation';
import FirstPage from '../pages/cart/fistPage/FirstPage';
import ConfirmPage from '../pages/confirmPage/ConfirmPage';
import BroningPage from '../pages/broning/BroningPage';
import ReservedPage from '../pages/reservedPage/ReservedPage';
import ContactsPage from '../pages/contacts/ContactsPage';
import EventsMenuPage from '../pages/events/eventsMenuPage/EventsMenuPage';

export const ROUTES_CONFIG = {
  main: {
    id: 0,
    name: 'RootHome',
    title: 'Главная',
    isShow: true,
    isEvent: false,
    icon: 'house',
    component: RootHome,
    options: {headerShown: false},
  },

  cart: {
    id: 1,
    name: 'RootCart',
    title: 'Меню',
    isShow: true,
    isEvent: false,
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
    isEvent: false,
    component: BroningPage,
    options: {headerShown: false},
  },
  events: {
    id: 3,
    name: 'RootEvents',
    title: 'События',
    icon: 'calendar-days',
    isShow: true,
    isEvent: false,
    component: EventsMenuPage,
    options: {headerShown: false},
  },

  translation:{
    id:4,
    name: 'RootTranslation',
    title: 'Трансляции',
    icon: 'futbol',
    component: RootTranslation,
    isShow: true,
    isEvent: false,
    options: {headerShown: false}
  },
  contacts:{
    id:5,
    name: 'RootContacts',
    title: 'Контакты',
    icon: 'address-book',
    component: ContactsPage,
    isShow: true,
    isEvent: false,
    options: {headerShown: false}
  },
  basket: {
    id: 6,
    name: 'Basket',
    title: 'Корзина',
    isShow: false,
    isEvent: false,
    component: RootBasket,
    options: {headerShown: false},
  },
  firstPage: {
    id: 7,
    name: 'FirstPage',
    title: 'Меню кнопок',
    isShow: false,
    isEvent: false,
    component: RootCart,
    options: {headerShown: false},
  },
  confirm:{
    id: 8,
    name: 'ConfirmPage',
    title: 'Заказ подтвержден',
    isShow: false,
    isEvent: false,
    component: ConfirmPage,
    options: {headerShown: false},

  },
  reserved:{
    id: 9,
    name: 'ReservedPage',
    title: 'Ваш столик забронирован',
    isShow: false,
    isEvent: false,
    component: ReservedPage,
    options: {headerShown: false},

  },
  firstEvent: {
    id: 10,
    name: 'FirstEvent',
    title: '15.02',
    time: '15:00',
    isShow: false,
    isEvent: true,
    source: require('../assets/images/dev/eventsButtons/first.png'),
    component: RootCart, // страница первого события
    options: {headerShown: false},
  },
  secondEvent:{
    id: 11,
    name: 'SecondEvent',
    title: '27.02',
    time: '20:00',
    isShow: false,
    isEvent: true,
    source: require('../assets/images/dev/eventsButtons/second.png'),
    component: ConfirmPage,// страница второго события
    options: {headerShown: false},

  },
  thirdEvent:{
    id: 12,
    name: 'ThirdEvent',
    title: '28.02',
    time: '19:00',
    isShow: false,
    isEvent: true,
    source: require('../assets/images/dev/eventsButtons/third.png'),
    component: ReservedPage, // страница  третье событие
    options: {headerShown: false},

  }
};

export const ARRAY_ROUTES = Object.entries(ROUTES_CONFIG).map(
  ([key, object]) => object,
);
export const ARRAY_BUTTONS = ARRAY_ROUTES.filter((route) => route.isShow);
export const EVENTS_TABS =  ARRAY_ROUTES.filter((route) => route.isEvent);
