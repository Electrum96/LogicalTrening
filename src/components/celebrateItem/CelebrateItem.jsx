import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleCelebrateItem from './useStyleCelebrateItem';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../assets/styles/variables';

const CelebrateItem = ({ title, date, route }) => {
    const navigation = useNavigation();

    const styles = useStyleCelebrateItem();
    return (
        <View style={styles.main}>
        <TouchableOpacity style={styles.container} onPress={() => navigation.push(route)}>
            <View style={styles.contentBox}>
                <Text>{title}</Text>
                <Text>{date}</Text>
            </View>
            <FontAwesomeIcon icon={'star'} color={COLORS.backgroundSalad} size={50} />
        </TouchableOpacity>
        </View>
    )
}
export default observer(CelebrateItem);