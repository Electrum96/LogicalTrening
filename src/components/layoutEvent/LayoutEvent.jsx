import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import useStyleLayoutEvent from './useStyleLayoutEvent';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../assets/styles/variables';

const LayoutEvent = ({imageBackground}) => {
    const navigation = useNavigation();
    const goBack = () => navigation.goBack();

    const styles = useStyleLayoutEvent();
    return (
        <ImageBackground source={imageBackground} style={styles.layout}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon} onPress={goBack}>
                    <FontAwesomeIcon icon={'angle-left'} size={30} color={COLORS.light} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
export default observer(LayoutEvent);