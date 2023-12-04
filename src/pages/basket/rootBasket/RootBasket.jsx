import {Text, View, Image} from 'react-native';

import useStyleRootBasket from './useStyleRootBasket';

const RootBasket = () => {

const styles = useStyleRootBasket();
    return (
        <View>
            <Text>RootBasket</Text>
        </View>
    )
}

export default RootBasket;