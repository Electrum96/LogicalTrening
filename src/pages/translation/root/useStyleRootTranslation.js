import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootTranslation() {
   const styles = StyleSheet.create({
      pageWrapper:{
         backgroundColor: COLORS.accentBg,
         width: Dimensions.get('window').width,
         height: Dimensions.get('window').height,
      },
      title:{
         color: COLORS.white,
         fontSize: 25,
         fontWeight: '700',
         marginBottom: 20
      }
    

   });

   return styles;
}

export default useStyleRootTranslation;