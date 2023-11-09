import {StyleSheet} from 'react-native';

function useStyleNavigation () {
    const styles = StyleSheet.create({

        navWrapper: {
            backgroundColor: 'black',
            padding: 20,
          
        },
        title: {
            color: 'white',
            textAlign: 'center'
        }
        
    });

    return styles;
}

export default useStyleNavigation;