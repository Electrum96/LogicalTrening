import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleProductList from './useStyleProductList';

import productStore from '../../../store/productStore';
import ProductItem from '../productItem/ProductItem';

const ProductList = () => {
  const {productList} = productStore;

  const styles = useStyleProductList();
  return (
    <View style={styles.wrapper}>
      {productList.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </View>
  );
};

export default observer(ProductList);
