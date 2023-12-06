import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

import BasketItem from '../basketItem/BasketItem';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';

const RootBasket = () => {
  const {basketList} = productStore;

  const styles = useStyleRootBasket();
  return (
    <LayoutMain>
      <ScrollView contentContainerStyle={styles.list}>
        <List data={basketList} Component={BasketItem} />
      </ScrollView>
    </LayoutMain>
  );
};

export default RootBasket;
