import {Text, View, Image} from 'react-native';

import useStyleRootCart from './useStyleRootCart';

const RootCart = () => {

const styles = useStyleRootCart();
    return (
        <View>
            <Text>RootCart</Text>
        </View>
    )
}

export default RootCart;