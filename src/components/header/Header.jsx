import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

import ButtonIcon from '../buttonIcon/ButtonIcon';

import {useNavigation, useRoute} from '@react-navigation/native';

import {ROUTES_CONFIG} from '../../routes/routesConfig';
import { COLORS } from '../../assets/styles/variables';

const Header = ({title}) => {
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
        <ButtonIcon color={'red'} icon={'bars'} onPress={goMain} />
      )}
      {!isShowBars && (
        <ButtonIcon color={COLORS.lightBg} icon={'angle-left'} onPress={goBack} />
      )}

      <Text>{title}</Text>
      {isShowBasket && (
        <ButtonIcon color={COLORS.blue} icon={'shopping-cart'} onPress={goBasket} />
      )}
    </View>
  );
};

export default Header;
