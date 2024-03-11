import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleButtonIcon from './useStyleButtonIcon';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonIcon = ({color, icon, onPress, size = 20}) => {

const styles = useStyleButtonIcon();
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
              <FontAwesomeIcon icon={icon} size={size} color={color}/>
        </TouchableOpacity>
    )
}

export default ButtonIcon;