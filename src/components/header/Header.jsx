import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

import ButtonIcon from '../buttonIcon/ButtonIcon';

import { useNavigation } from '@react-navigation/native';

import { ROUTES_CONFIG } from '../../routes/routesConfig';

const Header = () => {

    const navigation = useNavigation();

const styles = useStyleHeader();
    return (
        <View style={styles.headerWrap}>
           <ButtonIcon color={'red'} icon={'bars'} onPress={() => navigation.push(ROUTES_CONFIG.main.name)}/>
           <ButtonIcon color={'red'} icon={'arrow-left'} onPress={() => navigation.goBack()}/>
        </View>
    )
}

export default Header;