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
  const goThanks = () => navigation.push(ROUTES_CONFIG.done.name)
  const { basketList, totalPrice, clear } = productStore;

  function handler() {
    goThanks(),
      clear()
  }

  const styles = useStyleRootBasket();

  if (basketList.length > 0) {
    return (
      <LayoutMain color={COLORS.backgroundSalad}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Ваш заказ</Text>
        </View>
        <View style={styles.contentBox}>
          <ScrollView contentContainerStyle={styles.list}>
            <List data={basketList} Component={BasketItem} />
          </ScrollView>
          <View style={styles.priceBox}>
            <Text style={styles.titleTotal}>К оплате:</Text>
            <View style={styles.wrapperTotal}>
              <Text style={styles.count}>{totalPrice} $</Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <OvalButton title={'Подтвердить'} onPress={handler} />
        </View>
      </LayoutMain>

    );
  } else {
    return (
    <LayoutMain color={COLORS.backgroundSalad}>
        <View style={styles.container}>
          <Image style={styles.image} source={require('../../../assets/images/decotarion/bags.png')}/>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>Ваша корзина пуста</Text>
          </View>
        </View>
      </LayoutMain>
    )
  }

};

export default observer(RootBasket);
