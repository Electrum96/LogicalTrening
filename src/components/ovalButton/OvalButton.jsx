import { Text, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleOvalButton from './useStyleOvalButton';

const OvalButton = ({title, onPress}) => {

    const styles = useStyleOvalButton();
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
           <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
export default observer(OvalButton);