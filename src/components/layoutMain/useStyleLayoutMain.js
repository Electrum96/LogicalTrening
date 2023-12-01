import {StyleSheet} from 'react-native';

function useStyleLayoutMain () {
    const styles = StyleSheet.create({
        layout:{
            flex: 1,
            backgroundColor: 'red',
            justifyContent: 'space-between'
        },
        header:{
            backgroundColor: 'green'
        },
        main: {
            backgroundColor: 'blue',
            flex: 1
        }
        
    });

    return styles;
}

export default useStyleLayoutMain;