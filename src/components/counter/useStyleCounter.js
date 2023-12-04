import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/styles/variables';

function useStyleCounter() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.light,
     
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
