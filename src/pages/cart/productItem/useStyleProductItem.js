import {StyleSheet} from 'react-native';
import { COLORS } from '../../../assets/styles/variables';

function useStyleProductItem () {
    const styles = StyleSheet.create({
        wrapper:{
           flex: 1,
           flexBasis: '40%',
           gap: 5,
           justifyContent: 'space-between',
           backgroundColor: 'red'
        
        },
        image:{
            width: "100%",
            height: 150
        },
        box:{
            flex: 1,
            justifyContent: 'space-between'
        },
        contentWrap:{
            padding: 8,
            

        },
        title:{
            textAlign: 'center',
            fontWeight: '700',
            marginBottom: 5,
            color: COLORS.dark,
            fontSize: 15
        },
        footer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 8
        },
        desc:{
            marginBottom: 10,
            color: COLORS.dark
        },
        price:{
            color: COLORS.dark,
            fontSize: 20
        }
    });

    return styles;
}

export default useStyleProductItem;