import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/styles/variables';

function useStyleBasketItem() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.lightBlue,
      gap: 10,
      height: 100,
      width: "80%",
      paddingLeft: 10,
      paddingVertical: 10,
      alignItems: 'center',
      borderRightWidth: 1,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20
    },
    informWrap: {
      flexDirection: 'column',
      flex: 1,
      height: '100%',
      width: '10%',
      gap: 10,
      justifyContent: 'center'
    },
    image: {
      width: '50%',
      height: '100%',
    },
    title: {
      fontSize: 23,
      fontWeight: '800',
      color: COLORS.dark,
    },

    btnWrap: {
      justifyContent: 'space-between',
      height: '100%',
      gap: 5,
      padding: 5,
    },
    priceWrapper:{
      borderBottomWidth: 2,
      width: 50
    },
    price:{
      color: COLORS.dark,
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center'
    }
  });

  return styles;
}

export default useStyleBasketItem;
