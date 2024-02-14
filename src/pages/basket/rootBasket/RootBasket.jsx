import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

import BasketItem from '../basketItem/BasketItem';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';

import {observer} from 'mobx-react-lite';
import LongButton from '../../../components/longButton/LongButton';
import { COLORS } from '../../../assets/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

const RootBasket = () => {
  const {basketList, totalPrice} = productStore;
  const navigation = useNavigation();
  const goMain = () => navigation.push(ROUTES_CONFIG.main.name);


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
       <Text style={styles.count}>{totalPrice}</Text>
       </View>
       <LongButton title={'Оформить заказ'} color={COLORS.lightBlue} onPress={goMain}/>
       </View>
  );
};

export default observer(RootBasket);
