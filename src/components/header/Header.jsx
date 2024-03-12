import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

import ButtonIcon from '../buttonIcon/ButtonIcon';

import {useNavigation, useRoute} from '@react-navigation/native';

import {ROUTES_CONFIG} from '../../routes/routesConfig';
import { COLORS } from '../../assets/styles/variables';

const Header = () => {
  const navigation = useNavigation();
  const goMain = () => navigation.push(ROUTES_CONFIG.main.name);
  const goBack = () => navigation.goBack();
  const goBasket = () => navigation.push(ROUTES_CONFIG.basket.name);

  const {name} = useRoute();
  const isShowBasket = name !== ROUTES_CONFIG.basket.name;
  const isShowBars = name === ROUTES_CONFIG.cart.name;

  const styles = useStyleHeader();
  return (
    <View style={styles.headerWrap}>
      {isShowBars && (
        <ButtonIcon color={COLORS.white} icon={'bars'} size={30} onPress={goMain} />
      )}
      {!isShowBars && (
        <ButtonIcon color={COLORS.white} icon={'arrow-left'} size={30} onPress={goBack} />
      )}

      <ButtonIcon color={COLORS.white} icon={'home'} size={30} onPress={goMain} />

      {isShowBasket && (
        <ButtonIcon color={COLORS.white} size={30} icon={'shopping-cart'} onPress={goBasket} />
      )}
    </View>
  );
};

export default Header;
