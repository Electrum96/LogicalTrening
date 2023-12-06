import {Text, View, Image} from 'react-native';

import useStyleContainer from './useStyleContainer';

const Container = ({children, full}) => {

const styles = useStyleContainer(full);
    return (
        <View style={styles.container}>
           {children}
        </View>
    )
}

export default Container;