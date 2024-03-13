import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/styles/variables';

function useStyleBasketItem() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 20,
      flex: 1,
      padding: 10,
      borderBottomWidth: 3,
      borderBottomColor: COLORS.backgroundSalad,
      
    },
    informWrap: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1,
      height: '100%',
      gap: 15
    },
    image: {
      width: '50%',
      height: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: COLORS.dark,
    },

    btnWrap: {
      justifyContent: 'flex-end',
      height: '100%',
      gap: 5,
      padding: 5,
    },
    price:{
      fontSize: 20,
      color: COLORS.white,
      fontWeight: '800'
    },
    priceBox:{
      width: 90,
      height: 30,
      backgroundColor: COLORS.accentGreen,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30
    }
  });

  return styles;
}

export default useStyleBasketItem;
