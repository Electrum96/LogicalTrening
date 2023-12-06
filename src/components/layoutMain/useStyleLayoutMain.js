import {StyleSheet} from 'react-native';

function useStyleLayoutMain () {
    const styles = StyleSheet.create({
        layout:{
            flex: 1,
            justifyContent: 'space-between'
        },
        header:{
    
        },
        main: {
       
            flex: 1
        }
        
    });

    return styles;
}

export default useStyleLayoutMain;