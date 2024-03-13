import { Text, View, Image, ScrollView } from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

import BasketItem from '../basketItem/BasketItem';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';

import { observer } from 'mobx-react-lite';
import { COLORS } from '../../../assets/styles/variables';
import OvalButton from '../../../components/ovalButton/OvalButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

const RootBasket = () => {
  const navigation = useNavigation();
  const goThanks = () =>  navigation.push(ROUTES_CONFIG.done.name)
  const { basketList, totalPrice } = productStore;

  const styles = useStyleRootBasket();
  return (
    <LayoutMain color={COLORS.backgroundSalad}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Ваш заказ</Text>
      </View>
      <View style={styles.contentBox}>
        <ScrollView contentContainerStyle={styles.list}>
          <List data={basketList} Component={BasketItem} />
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.title}>К оплате:</Text>
          <Text style={styles.count}>{totalPrice} $</Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
      <OvalButton title={'Подтвердить'} onPress={goThanks}/>
      </View>
    </LayoutMain>
  );
};

export default observer(RootBasket);
