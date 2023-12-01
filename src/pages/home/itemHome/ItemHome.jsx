import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleItemHome from './useStyleItemHome';
import {useNavigation} from '@react-navigation/native';

const ItemHome = ({name, title}) => {
  const navigation = useNavigation();

  const styles = useStyleItemHome();
  return (
    <TouchableOpacity onPress={() => navigation.push(name)}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemHome;
