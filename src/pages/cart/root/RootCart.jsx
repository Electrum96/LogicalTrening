import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootCart from './useStyleRootCart';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';
import ProductItem from '../productItem/ProductItem';

import {observer} from 'mobx-react-lite';
import filterButtons from '../../../assets/data/filterButtons';
import FilterButton from '../filterButton/FilterButton';
import { COLORS } from '../../../assets/styles/variables';

const RootCart = () => {
  const {productList} = productStore;
 
  const styles = useStyleRootCart();
  return (
    <LayoutMain color={COLORS.backgrounColor}>
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
