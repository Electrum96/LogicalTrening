import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const Layout = ({children}) => {
  const styles = useStyleLayout({color: 'yellow'});
  return (
    <View style={styles.layoutWrap}>
      <Header />
      <View style={styles.cont}>{children}</View>
      <Navigation />
    </View>
  );
};

export default Layout;
