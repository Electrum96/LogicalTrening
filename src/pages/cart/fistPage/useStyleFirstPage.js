import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleFirstPage() {
const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.accentBg,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    imageWrapper:{
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: COLORS.yelBgc,
        width: '100%',
        height: '15%',
        marginTop: 20
    },
    logo:{
        width: '70%',
        height: '45%'

    }

   });

 return styles;

}

export default useStyleFirstPage;