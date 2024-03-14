import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleCelebrateItem() {
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
      
    },
    main:{
        gap: 20,
        height: '20%'
    }

   });

 return styles;

}

export default useStyleCelebrateItem;