import { Text, View, Image, ScrollView } from 'react-native';
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
  const { basketList, totalPrice, clear } = productStore;
  const navigation = useNavigation();
  const goCart = () => navigation.push(ROUTES_CONFIG.cart.name);
  const goConfirm = () => navigation.push(ROUTES_CONFIG.confirm.name)

  const paymentHandler = () => {
    clear(),
    goConfirm()
  }

  const styles = useStyleRootBasket();

  if (basketList.length > 0) {
    return (
      <View style={styles.pageWrapper}>
        <LayoutMain>
          <Text style={styles.pageTitle}> Корпа</Text>
          <ScrollView contentContainerStyle={styles.list}>
            <List data={basketList} Component={BasketItem} />
          </ScrollView>
        </LayoutMain>
        <View style={styles.footer}>
          <Text style={styles.title}>Укупно</Text>
          <Text style={styles.count}>{totalPrice} Дин</Text>
        </View>
        <LongButton title={'Наручите'} color={COLORS.lightBg} onPress={paymentHandler} />
      </View>
    )
  } else {
    return (
      <View style={styles.pageWrapper}>
        <LayoutMain>
          <View style={styles.contentBox}>
            <Image style={styles.image} source={require('../../../assets/images/dev/logo/basketImage.png')} />
            <Text style={styles.description}>Ваша корпа нема робу</Text>
          </View>
        </LayoutMain>
        <LongButton title={'Повратак на мени'} color={COLORS.lightBg} onPress={goCart} />
      </View>)

  }
};

export default observer(RootBasket);
