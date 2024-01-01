import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';
import LayoutMain from '../../../components/layoutMain/LayoutMain';

import BasketItem from '../basketItem/BasketItem';
import List from '../../../components/list/List';

import productStore from '../../../store/productStore';

import {observer} from 'mobx-react-lite';

const RootBasket = () => {
  const {basketList, totalPrice} = productStore;

  const styles = useStyleRootBasket();
  return (
    <LayoutMain>
      <ScrollView contentContainerStyle={styles.list}>
        <List data={basketList} Component={BasketItem}/>
       </ScrollView>
       <View style={styles.footer}>
       <Text style={styles.title}>Итого</Text>
       <Text style={styles.count}>{totalPrice}</Text>
       </View>
    </LayoutMain>
  );
};

export default observer(RootBasket);
