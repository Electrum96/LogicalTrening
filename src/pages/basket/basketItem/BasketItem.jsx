import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleBasketItem from './useStyleBasketItem';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import Counter from '../../../components/counter/Counter';

const BasketItem = ({count, title, price}) => {
  const styles = useStyleBasketItem();
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../../assets/images/dev/DevImage.png')} style={styles.image}/>
      <View style={styles.informWrap}>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.btnWrap}>
        <ButtonIcon icon={'trash'} size={20}/>
        <Counter count={count}/>
      </View>
    </View>
  );
};

export default observer(BasketItem);

