import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleEventsButton from './useStyleEventsButton';
import { useNavigation } from '@react-navigation/native';

const EventsButton = tab => {
    const { title, name, time, source } = tab;
    const navigation = useNavigation();

    const styles = useStyleEventsButton();
    return (
        <TouchableOpacity onPress={() => navigation.push(name)}>
            <View style={styles.item}>
                <View style={styles.box}>
                    <Text style={styles.date}>{title}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Image style={styles.image} source={source} />
            </View>
        </TouchableOpacity>
    )
}
export default observer(EventsButton);