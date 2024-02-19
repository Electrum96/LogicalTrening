import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleProductItem from './useStyleProductItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

import productStore from '../../../store/productStore';

import { COLORS } from '../../../assets/styles/variables';

const ProductItem = ({title, image, desc, price, id, inBasket, count}) => {
  const {add, remove} = productStore;
  const handlerRemove = () => remove(id);
  const handlerAdd = () => add(id);

  const styles = useStyleProductItem();
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.box}>
        <View style={styles.contentWrap}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.desc} numberOfLines={3}>
            {desc}
          </Text>
        </View>
        <View style={styles.footer}>
          {!inBasket?
          <Text style={styles.price}>{price} дин</Text> : <Counter count={count} id={id}/>}
          <ButtonIcon
            icon={'shopping-cart'}
            color={inBasket? COLORS.yelBgc : COLORS.dark}
            onPress={inBasket ? handlerRemove : handlerAdd}
          />
        </View>
      </View>
    </View>
  );
};

export default observer(ProductItem);
