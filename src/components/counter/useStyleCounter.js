import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/styles/variables';

function useStyleCounter() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: COLORS.accentGreen,
      width: 65,
      padding: 5,
      borderRadius: 30,
      justifyContent: 'center',   
    },

    button: {
        paddingHorizontal: 5,
    },

    text:{
      color: COLORS.white,
      fontSize: 16,
      fontWeight: '700'
    }
  });

  return styles;
}

export default useStyleCounter;
