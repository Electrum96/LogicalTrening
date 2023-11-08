import {Text, View, Image, TouchableOpacity} from 'react-native';

import mobxCounterSlice from './mobx/mobxCounterSlice';

import Counter from './counter/Counter';

// import styles from './App.style';

const App = () => {
  return (
    <View>
      <Counter color="red" />
      <Counter color="green" />
    </View>
  );
};

export default App;
