import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleLongButton from './useStyleLongButton';

const LongButton = ({ title, color, onPress }) => {

    const styles = useStyleLongButton(color);
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default observer(LongButton);