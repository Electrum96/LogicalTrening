import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleOrderedPage() {
const styles = StyleSheet.create({
    logo:{
        width: 210,
        height: 70,
        alignSelf: 'center',
        marginVertical: 20    
    },
    stars: {
        width: '100%',
        height: 38,
        alignSelf: 'center' ,
        marginBottom: 20  
    },
    titleBox:{
        width: '100%',
        height: 200,
        backgroundColor: COLORS.yellow,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
       paddingVertical: 15
    },
    code:{
        width: '40%',
        height: '85%'
    },
    title: {
        fontSize: 20,
        color: COLORS.accentGreen,
        fontWeight: '700'

    }


   });

 return styles;

}

export default useStyleOrderedPage;