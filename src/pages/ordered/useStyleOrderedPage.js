import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../assets/styles/variables';

function useStyleOrderedPage() {
const styles = StyleSheet.create({
    pageWrapper:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.backgrounColor,
        justifyContent: 'space-between'
    },
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
    contentWrapper:{
        height: '80%',
        justifyContent: 'flex-end',
        backgrounColor: 'red'
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
        height: '90%'
    },
    title: {
        fontSize: 20,
        color: COLORS.accentGreen,
        fontWeight: '700'

    },
    headerWrapper:{
        height: '10%'
    }
  
   });

 return styles;

}

export default useStyleOrderedPage;