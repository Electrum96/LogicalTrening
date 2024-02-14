import {StyleSheet} from 'react-native';

function useStyleLongButton(color) {
const styles = StyleSheet.create({
    container:{
        backgroundColor: color,
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }

   });

 return styles;

}

export default useStyleLongButton;