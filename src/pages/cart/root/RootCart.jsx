import {Text, View, Image} from 'react-native';

import useStyleRootCart from './useStyleRootCart';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import ProductList from '../productList/ProductList';

const RootCart = () => {
  const styles = useStyleRootCart();
  return (
    <LayoutMain title={'Продукты'}>
      <View>
        <Text>RootCart</Text>
        <ProductList/>
      </View>
    </LayoutMain>
  );
};

export default RootCart;
