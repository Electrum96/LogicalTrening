import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleReservedPage() {
const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.lightBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
   
    },
    image:{
        width: 120,
        height: 120
    },
    contentBox:{
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
        gap: 20
    },
    titleBox:{
        width:'80%',
        height: 50,
        borderRadius: 20,
        backgroundColor: COLORS.lightBlueText,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: COLORS.white,
        fontSize: 20,
        fontWeight: '700',
       
    }
   });

 return styles;

}

export default useStyleReservedPage;