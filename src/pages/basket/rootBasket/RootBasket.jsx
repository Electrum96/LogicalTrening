import { Text, View, Image, ScrollView} from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import BasketItem from '../basketItem/BasketItem';
import LongButton from '../../../components/longButton/LongButton';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';

import { COLORS } from '../../../assets/styles/variables';

import { ROUTES_CONFIG } from '../../../routes/routesConfig';

import useStyleRootBasket from './useStyleRootBasket';

const RootBasket = () => {
  const { basketList, totalPrice } = productStore;
  const navigation = useNavigation();
  const goConfirm = () => navigation.push(ROUTES_CONFIG.confirm.name);
  const styles = useStyleRootBasket();
  return (
    <View style={styles.pageWrapper}>
    <LayoutMain>
      <Text style={styles.pageTitle}> Корзина</Text>
      <ScrollView contentContainerStyle={styles.list}>
        <List data={basketList} Component={BasketItem}/>
       </ScrollView>
       </LayoutMain>
       <View style={styles.footer}>
        
       <Text style={styles.title}>Итого</Text>
       <Text style={styles.count}>{totalPrice} $</Text>
       </View>
       <LongButton title={'Оформить заказ'} color={COLORS.lightBg} onPress={goConfirm}/>
       </View>
  );
};

export default observer(RootBasket);
