import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/styles/variables';

function useStyleCounter() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.accentGreen,
      width: 70,
      padding: 5,
      borderRadius: 30,
      justifyContent: 'center',   
    },

    button: {
        paddingHorizontal: 5,
    },

    text:{
      color: COLORS.white,
      fontSize: 15,
      fontWeight: '700'
    }
  });

  return styles;
}

export default useStyleCounter;
