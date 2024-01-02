import { StyleSheet } from 'react-native';

function useStyleFilterButton() {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 30,
            width: 20,
            backgroundColor: 'red',
            borderColor: 'orange'
        },
        title: {
            fontSize: 20,
            fontWeight: '700'
        }
    })
    return styles;
}
export default useStyleFilterButton;