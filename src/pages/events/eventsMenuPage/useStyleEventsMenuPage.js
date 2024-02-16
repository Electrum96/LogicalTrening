import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleEventsMenuPage() {
const styles = StyleSheet.create({
    pageWrapper:{
        backgroundColor: COLORS.accentBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
      
    },
    logo:{
        width: 250,
        height: 40,
        alignSelf: 'center'
    },
    pageTitle: {
        color: COLORS.light,
        fontSize: 25,
        fontWeight: '700',
        marginTop: 20,
       
    },
    listContainer:{
        gap: 10,
        height: '75%',
        justifyContent: 'center',
       
    }

   });

 return styles;

}

export default useStyleEventsMenuPage;