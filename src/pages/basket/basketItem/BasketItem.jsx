import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';

import useStyleBasketItem from './useStyleBasketItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

import productStore from '../../../store/productStore';

const BasketItem = ({ count, title, price, id }) => {

  const { increment, decrement, remove } = productStore;
  const styles = useStyleBasketItem();
  return (
    <View style={styles.wrapper}>
      <View style={styles.informWrap}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
      <Counter count={count} increment={() => increment(id)} decrement={() => decrement(id)} />
      <View style={styles.btnWrap}>
        <ButtonIcon icon={'trash'} size={20} onPress={() => remove(id)} />
        <Text style={styles.price}>{price * count}$</Text>
      </View>
    </View>
  );
};

export default observer(BasketItem);

