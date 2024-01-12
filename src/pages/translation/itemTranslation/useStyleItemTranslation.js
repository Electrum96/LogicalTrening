import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleItemTranslation() {
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        backgroundColor: 'red'
    
    }

   });

 return styles;

}

export default useStyleItemTranslation;