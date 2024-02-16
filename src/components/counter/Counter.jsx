import {Text, View, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleCounter from './useStyleCounter';
import productStore from '../../store/productStore';

const Counter = ({count, id}) => {
    const {increment, decrement} = productStore;
  

  const styles = useStyleCounter();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.decrement, styles.button]} onPress={() => decrement(id)}>
        <Text style={styles.elem}>-</Text>
      </TouchableOpacity>

      <Text style={styles.elem}>{count}</Text>
      
      <TouchableOpacity style={[styles.increment, styles.button]} onPress={() => increment(id)}>
        <Text style={styles.elem}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Counter);
