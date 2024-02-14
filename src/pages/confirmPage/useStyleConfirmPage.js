import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleConfirmPage() {
const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.blue,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
   
    },
    image:{
        width: 150,
        height: 150
    },
    contentBox:{
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        gap: 20
    }

   });

 return styles;

}

export default useStyleConfirmPage;