import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/styles/variables';

function useStyleBasketItem() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.lightBlue,
      gap: 10,
      height: 100,
      width: "90%",
      paddingLeft: 10,
      alignItems: 'center',
      borderRightWidth: 1,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20
    },
    informWrap: {
      flexDirection: 'column',
      flex: 1,
      height: '100%',
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
  });

  return styles;
}

export default useStyleBasketItem;
