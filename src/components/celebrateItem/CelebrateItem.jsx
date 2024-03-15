import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleCelebrateItem from './useStyleCelebrateItem';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../assets/styles/variables';

const CelebrateItem = ({ title, date, route, id }) => {
    const navigation = useNavigation();

    const styles = useStyleCelebrateItem();

    if (id % 2 == 0) {
        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.push(route)}>
                <FontAwesomeIcon style={styles.star} transform={"rotate-90"} icon={'star'}  color={COLORS.backgroundSalad} size={50} />
                <View style={styles.contentBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.push(route)}>
                <View style={styles.contentBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <FontAwesomeIcon style={styles.star} transform={"rotate-90"} icon={'star'} color={COLORS.backgroundSalad} size={50} />
            </TouchableOpacity>
        )
    }
}
export default observer(CelebrateItem);