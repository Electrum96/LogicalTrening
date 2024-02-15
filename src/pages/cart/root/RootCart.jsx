import { Text, View, Image, ScrollView } from 'react-native';
import { observer } from 'mobx-react-lite';

import useStyleRootCart from './useStyleRootCart';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';

import FilterButton from '../filterButton/FilterButton';
import ProductItem from '../productItem/ProductItem';

import productStore from '../../../store/productStore';
import filterButtons from '../../../assets/data/filterButtons';



const RootCart = () => {

  const { productFiltered } = productStore;

  const styles = useStyleRootCart();
  return (
    <View style={styles.pageWrapper}>
      <LayoutMain>
        <View style={styles.container}>
          <List data={filterButtons} Component={FilterButton} />
        </View>
        <ScrollView contentContainerStyle={styles.listWrap} >
          <List data={productFiltered} Component={ProductItem} />
        </ScrollView>
      </LayoutMain>

    </View>
  );
};

export default observer(RootCart);
