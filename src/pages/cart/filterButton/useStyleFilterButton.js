import { StyleSheet } from 'react-native';

function useStyleFilterButton() {
    const styles = StyleSheet.create({
        buttonWrap: {
            height: 60,
            width: 90,
            backgroundColor: 'blue',
            borderColor: 'orange',
            borderWidth: 2,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 5
        },
        title: {
            fontSize: 17,
            fontWeight: '800'
        }
    })
    return styles;
}
export default useStyleFilterButton;