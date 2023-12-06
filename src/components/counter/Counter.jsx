import {Text, View, Image, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleCounter from './useStyleCounter';

const Counter = ({count, increment, decrement}) => {
  const styles = useStyleCounter();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.decrement, styles.button]} onPress={decrement}>
        <Text>-</Text>
      </TouchableOpacity>

      <Text>{count}</Text>
      
      <TouchableOpacity style={[styles.increment, styles.button]} onPress={increment}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(Counter);
