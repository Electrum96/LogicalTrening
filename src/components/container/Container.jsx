import {Text, View, Image} from 'react-native';

import useStyleContainer from './useStyleContainer';

const Container = ({children}) => {

const styles = useStyleContainer();
    return (
        <View style={styles.container}>
           {children}
        </View>
    )
}

export default Container;