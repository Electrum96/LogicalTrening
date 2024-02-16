import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleContactsPage() {
const styles = StyleSheet.create({
    pageWrapper:{
        backgroundColor: COLORS.accentBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      
    },
    pageTitle: {
        color: COLORS.light,
        fontSize: 25,
        fontWeight: '700',
        marginTop: 20,
       
    },
    box:{
        justifyContent: 'space-between',
        height: '80%',
        marginTop: 20
    },
    form:{
        backgroundColor: COLORS.lightBlue,
        height: '70%',
        width: '85%',
        padding: 25,
        alignSelf: 'center'
    },
    inputs :{
        borderBottomWidth: 1,
        borderColor: COLORS.grey,
        color: COLORS.blueBars,
        fontWeight: '700',
        height: 50,
        fontSize: 13,
        justifyContent: 'center'
    },
    logo:{
        width: 250,
        height: 40,
        alignSelf: 'center'
    }

   });

 return styles;

}

export default useStyleContactsPage;