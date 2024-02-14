import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/styles/variables';

function useStyleCounter() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.light,
      width: 60,
      height: 30,
      backgroundColor: COLORS.yelBgc,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center'
     
    },
    button: {
        paddingHorizontal: 5,
    },

    decrement: {

    },
    increment: {

    },
  });

  return styles;
}

export default useStyleCounter;
