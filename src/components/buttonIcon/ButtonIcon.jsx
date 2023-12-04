import {Text, View, Image, TouchableOpacity} from 'react-native';

import useStyleButtonIcon from './useStyleButtonIcon';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const ButtonIcon = ({color, icon, onPress}) => {

const styles = useStyleButtonIcon();
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
              <FontAwesomeIcon icon={icon} size={30} color={color}/>
        </TouchableOpacity>
    )
}

export default ButtonIcon;