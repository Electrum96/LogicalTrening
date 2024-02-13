import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleRootHome from './useStyleRootHome';

import {ARRAY_BUTTONS, ROUTES_CONFIG} from '../../../routes/routesConfig';
import ItemHome from '../itemHome/ItemHome';
import List from '../../../components/list/List';
import Container from '../../../components/container/Container';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../assets/styles/variables';

const RootHome = () => {
  const navigation = useNavigation();
  const goBasket = () => navigation.push(ROUTES_CONFIG.basket.name);
  const styles = useStyleRootHome();
  return (
    <View style={styles.pageWrapper} >
    <Container>
      <Image style={styles.logo} source={require('../../../assets/images/dev/logo/LogoImage.png')}/>
      <View style={styles.listWrap}>
        <List data={ARRAY_BUTTONS} Component={ItemHome} />
      </View>
      <ButtonIcon icon={'shopping-cart'} onPress={goBasket} color={COLORS.light} size={60}/>
    </Container>
    </View>
  );
};

export default RootHome;
