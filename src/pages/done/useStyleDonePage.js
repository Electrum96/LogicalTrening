import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleDonePage() {
const styles = StyleSheet.create({
    container:{
        height: '60%',
        justifyContent: 'space-between',
        marginTop: 20
    },
    logo:{
        width: 210,
        height: 70,
        alignSelf: 'center'    
    },
    stars: {
        width: '100%',
        height: 38,
        alignSelf: 'center' ,
        marginBottom: 20  
    },
    contentBox:{
        alignItems: 'center',
        gap: 10
    },
    titleBox:{
        backgroundColor: COLORS.accentGreen,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBlockColor: COLORS.yellow
    },
    title:{
        color: COLORS.white,
        fontSize: 22,
        fontWeight: '800',
    }

   });

 return styles;

}

export default useStyleDonePage;