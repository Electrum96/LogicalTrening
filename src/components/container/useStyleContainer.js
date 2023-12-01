import {StyleSheet} from 'react-native';

function useStyleContainer () {
    const styles = StyleSheet.create({
        container:{
            marginHorizontal: 20,
            backgroundColor: '#00000090'
        }
        
    });

    return styles;
}

export default useStyleContainer;