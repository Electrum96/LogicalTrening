import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const Layout = ({ navigation, title,children}) => {
  const styles = useStyleLayout({color: 'yellow'});
  return (
    <View style={styles.layoutWrap}>
      <Header navigation={navigation} title={title}/>
      <View style={styles.cont}>{children}</View>
      <Navigation />
    </View>
  );
};

export default Layout;
