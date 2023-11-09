import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

const Header = () => {

const styles = useStyleHeader();
    return (
        <View style={styles. headerWrapper}>
            <Text style={styles.title}>Header</Text>
        </View>
    )
}

export default Header;