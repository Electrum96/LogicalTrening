import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleItemHome from './useStyleItemHome';
import {useNavigation} from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ItemHome = ({name, title, icon}) => {
  const navigation = useNavigation();

  const styles = useStyleItemHome();
  return (
    <TouchableOpacity style={styles.itemWrap} onPress={() => navigation.push(name)}>
      <FontAwesomeIcon icon={icon} size={50}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ItemHome;
