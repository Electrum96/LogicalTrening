import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';

import useStyleProductItem from './useStyleProductItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';

import productStore from '../../../store/productStore';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { COLORS } from '../../../assets/styles/variables';
import Counter from '../../../components/counter/Counter';

const ProductItem = ({ title, image, weight, price, id, inBasket, count }) => {
  const { add, remove } = productStore;

  const handlerRemove = () => remove(id);
  const handlerAdd = () => add(id);

  const styles = useStyleProductItem();
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={image} />
      <View style={styles.box}>
        <Text style={styles.title} numberOfLines={2} >{title}</Text>
        <Text style={styles.weight} >{weight}г.</Text>

        <View style={styles.footer}>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{price} $</Text>
          </View>
          {inBasket ? <Counter count={count} id={id} /> : <ButtonIcon
            icon={'plus'}
            onPress={inBasket ? handlerRemove : handlerAdd}
            color={COLORS.white}
          />}
        </View>
      </View>
    </View>

  );
};

export default observer(ProductItem);
