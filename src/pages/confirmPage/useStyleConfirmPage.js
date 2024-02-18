import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleConfirmPage() {
const styles = StyleSheet.create({
    container:{
        height: '100%',
        backgroundColor: COLORS.lightBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    image:{
        width: 150,
        height: 150
    },
    contentBox:{
        justifyContent: 'flex-end',
        height: '60%',
        alignItems: 'center',
        gap: 20,
       
        
    },
    titleBox:{
        width: 210,
        height: 40,
        borderRadius: 15,
        backgroundColor: COLORS.lightBlueText,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        color: COLORS.white,
        fontSize: 20,
        fontWeight: '700'
    }

   });

 return styles;

}

export default useStyleConfirmPage;