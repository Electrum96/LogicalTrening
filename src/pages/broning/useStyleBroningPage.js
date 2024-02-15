import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleBroningPage() {
const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.accentBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
       
    }, 
    contentWrap:{
      height: '80%', 
      justifyContent: 'center'
    },
    form:{
        alignItems: 'center',
        gap: 20,
        marginBottom: 40
    },
    inputs:{
        width: '95%',
        backgroundColor: COLORS.lightBlue,
        padding: 10,
        color: COLORS.light,
        fontSize: 15,
        fontWeight: '700'
    },
    title:{
        color: COLORS.light,
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
    }
 
   });

 return styles;

}

export default useStyleBroningPage;