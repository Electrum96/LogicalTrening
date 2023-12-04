import {Text, View, Image} from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

import BasketItem from '../basketItem/BasketItem';

const RootBasket = () => {
  const styles = useStyleRootBasket();
  return (
    <LayoutMain>
      <BasketItem title={'Titleeeeeeeeeeeeeeee'} count={10} price={100} />
    </LayoutMain>
  );
};

export default RootBasket;
