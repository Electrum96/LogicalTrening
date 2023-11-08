import {Text, View, Image, TouchableOpacity} from 'react-native';

import mobxCounterSlice from '../mobx/mobxCounterSlice';
import {observer} from 'mobx-react-lite';

import useStyleCounter from './useStyleCounter';

const Counter = ({color}) => {
  const styles = useStyleCounter({color: 'red'});
  const {count, increment, decrement} = mobxCounterSlice;

  return (
    <View style={styles.counter}>
      <TouchableOpacity style={styles.button} onPress={() => increment()}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>

      <Text style={styles.count}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => decrement()}>
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Counter);
