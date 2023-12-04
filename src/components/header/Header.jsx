import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

const Header = () => {

const styles = useStyleHeader();
    return (
        <View>
            <Text>Header</Text>
        </View>
    )
}

export default Header;