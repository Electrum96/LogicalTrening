import {StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleCelebrateItem() {
const styles = StyleSheet.create({
    container:{
        height: '18%',
        width: '80%',
        flexDirection: 'row',
        backgroundColor: COLORS.accentGreen,
        borderRadius: 30,
        justifyContent: 'center',
        paddingVertical: 10,
        gap: 10
      
    },
    contentBox:{
        justifyContent: 'center',
        paddingRight: 10
    },
    star:{
        alignSelf: 'flex-end'
    },
    title:{
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 23
    },
    date:{
        color: COLORS.white,
        fontSize: 23,
        alignSelf: 'center'

    }

   });

 return styles;

}

export default useStyleCelebrateItem;