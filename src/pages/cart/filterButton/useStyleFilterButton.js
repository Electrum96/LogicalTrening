import { StyleSheet } from 'react-native';

function useStyleFilterButton() {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 40,
            width: 80,
            backgroundColor: 'blue',
            borderColor: 'orange',
            borderWidth: 2,
            borderRadius: 5,
            alignItems: 'center'
        },
        title: {
            fontSize: 20,
            fontWeight: '700'
        }
    })
    return styles;
}
export default useStyleFilterButton;