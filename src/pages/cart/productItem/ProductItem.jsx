import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleProductItem from './useStyleProductItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

import productStore from '../../../store/productStore';
import {icon} from '@fortawesome/fontawesome-svg-core';

const ProductItem = ({title, image, desc, price, id, inBasket}) => {
  const {add, remove} = productStore;

  const handlerRemove = () => remove(id);
  const handlerAdd = () => add(id);

  const styles = useStyleProductItem();
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.box}>
        <View style={styles.contentWrap}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.desc} numberOfLines={3}>
            {desc}
          </Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.price}>{price}</Text>
          <ButtonIcon
            icon={inBasket ? 'minus' : 'plus'}
            onPress={inBasket ? handlerRemove : handlerAdd}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(ProductItem);
