import {StyleSheet} from 'react-native';

function useStyleCounter({color}) {
  const styles = StyleSheet.create({
    counter: {
      overflow: 'hidden',
      backgroundColor: color ? color : 'pink',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      borderRadius: 15,
      gap: 10,
    },

    button: {
      flex: 1,
      backgroundColor: '#ff00ff',
      alignItems: 'center',
    },

    count: {
      fontSize: 15,
    },

    text: {
      fontSize: 30,
      fontWeight: '700',
    },
  });

  return styles;
}

export default useStyleCounter;
