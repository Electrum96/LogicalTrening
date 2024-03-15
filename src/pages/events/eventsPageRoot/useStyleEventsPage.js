import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleEventsPage() {
const styles = StyleSheet.create({
    titleWrapper:{
        width: '90%',
        height: 60,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: COLORS.yellow,
        borderWidth: 5,
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 20


     },
     title:{
        color: COLORS.white,
        fontSize: 22,
        fontWeight: '700'
     },
     listWrapper:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
     }


   });

 return styles;

}

export default useStyleEventsPage;