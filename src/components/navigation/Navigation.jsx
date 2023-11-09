import {Text, View, Image} from 'react-native';

import useStyleNavigation from './useStyleNavigation';

const Navigation = () => {

const styles = useStyleNavigation();
    return (
        <View style={styles.navWrapper}>
            <Text style={styles.title}>Navigation</Text>
        </View>
    )
}

export default Navigation;