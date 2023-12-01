import {Text, View, Image} from 'react-native';

import useStyleRootCart from './useStyleRootCart';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

const RootCart = () => {
  const styles = useStyleRootCart();
  return (
    <LayoutMain>
      <View>
        <Text>RootCart</Text>
      </View>
    </LayoutMain>
  );
};

export default RootCart;
