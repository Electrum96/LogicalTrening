import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootCart from './useStyleRootCart';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';
import ProductItem from '../productItem/ProductItem';

const RootCart = () => {
  const {productList} = productStore;
  const styles = useStyleRootCart();
  return (
    <LayoutMain title={'Продукты'}>
      <Text>RootCart</Text>
      <ScrollView contentContainerStyle={styles.listWrap}>
        <List data={productList} Component={ProductItem} />
      </ScrollView>
    </LayoutMain>
  );
};

export default RootCart;
