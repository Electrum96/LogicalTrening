import {Text, View, TouchableOpacity} from 'react-native';

import useStyleHeader from './useStyleHeader';

const Header = ({navigation,title}) => {
  const styles = useStyleHeader();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity onPress={() => navigation.goBack('')}>
        <Text style={styles.btn}>Назад</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
