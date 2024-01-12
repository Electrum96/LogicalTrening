import {Text, View, Image} from 'react-native';

import useStyleRootTranslation from "./useStyleRootTranslation";

const RootTranslation = () => {

    const styles = useStyleRootTranslation();
    return (
        <View>
            <Text>Translation root</Text>
        </View>
    )
}

export default RootTranslation;