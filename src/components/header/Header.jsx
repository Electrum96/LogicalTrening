import {Text, View, Image} from 'react-native';

import useStyleHeader from './useStyleHeader';

import ButtonIcon from '../buttonIcon/ButtonIcon';

import { useNavigation } from '@react-navigation/native';

import { ROUTES_CONFIG } from '../../routes/routesConfig';

const Header = ({title}) => {

    const navigation = useNavigation();
    const goMain = () => navigation.push(ROUTES_CONFIG.main.name);
    const goBack = () => navigation.goBack();

const styles = useStyleHeader();
    return (
        <View style={styles.headerWrap}>
           <ButtonIcon color={'red'} icon={'bars'} onPress={goMain}/>
           <Text>{title}</Text>
           <ButtonIcon color={'red'} icon={'arrow-left'} onPress={goBack}/>
        </View>
    )
}

export default Header;