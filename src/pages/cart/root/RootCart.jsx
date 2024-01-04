import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootCart from './useStyleRootCart';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';
import ProductItem from '../productItem/ProductItem';

import {observer} from 'mobx-react-lite';
import filterButtons from '../../../assets/data/filterButtons';
import FilterButton from '../filterButton/FilterButton';

const RootCart = () => {
  const {productList} = productStore;
  const styles = useStyleRootCart();
  return (
    <LayoutMain title={'Продукты'}>
      <Text>RootCart</Text>
      <ScrollView horizontal={true} contentContainerStyle={styles.buttonsListWrap}>
        <List data={filterButtons} Component={FilterButton}/>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.listWrap}>
        <List data={productList} Component={ProductItem} />
      </ScrollView>
    </LayoutMain>
  );
};

export default observer(RootCart);
