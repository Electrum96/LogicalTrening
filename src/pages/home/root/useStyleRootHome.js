import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootHome () {
    const styles = StyleSheet.create({
        pageWrapper:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: COLORS.backgrounColor,
            justifyContent: 'space-between'
        },
        logoWrapper:{   
            backgroundColor: COLORS.accentGreen,  
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,       
            height: '20%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        logo:{
           width: '70%',
           height: 100,
        },

        listWrap:{
            gap: 10,
            alignItems:'center',
            marginVertical: 20
        },
       
      
        footer:{
            backgroundColor: COLORS.accentGreen,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            width: "100%",
            height: "15%",
            justifyContent: 'center',
            alignItems: 'center'
        },
        image:{
            width: '85%',
            height: 35
        }

        
    });

    return styles;
}

export default useStyleRootHome;