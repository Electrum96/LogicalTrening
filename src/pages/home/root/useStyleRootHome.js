import {Dimensions, StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleRootHome () {
    const styles = StyleSheet.create({
        pageWrapper:{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            backgroundColor: COLORS.backgrounColor
        },
        listWrap:{
            gap: 10,
            alignItems:'center',
            marginVertical: 20
        },
       
        logoWrapper:{
            backgrounColor: COLORS.accentGreen,
            height: 100,
            backgrounColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'yellow',
          
        },
        logo:{
            width: '65%',
            height: 65
           
        },
        footer:{
            width: "100%",
            height: "20%",
            backgrounColor: COLORS.accentGreen,
            justifyContent: 'flex-end',
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