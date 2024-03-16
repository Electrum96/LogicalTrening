import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleBasketItem from './useStyleBasketItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

import productStore from '../../../store/productStore';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../../assets/styles/variables';

const BasketItem = ({count, title, price, id}) => {
  
  const styles = useStyleBasketItem();
  return (
    <View style={styles.wrapper}>
      
      <FontAwesomeIcon icon={'star'} color={COLORS.backgroundSalad} size={30}/>

      <View style={styles.informWrap}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <View style={styles.priceBox}>
      <Text style={styles.price}>{price*count} ₽</Text>
      </View>
      </View>

      <View style={styles.btnWrap}>
        <Counter count={count} id={id}/>
      </View>

    </View>
  );
};

export default observer(BasketItem);

