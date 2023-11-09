import {StyleSheet} from 'react-native';

function useStyleHeader () {
    const styles = StyleSheet.create({
        headerWrapper: {
            backgroundColor: 'black',
            padding: 20,
          
        },
        title: {
            color: 'white',
            textAlign: 'center'
        },
        btn: {
            color:'white' 
        }
    });

    return styles;
}

export default useStyleHeader;