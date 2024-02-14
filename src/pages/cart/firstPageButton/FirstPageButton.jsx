import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleFirstPageButton from './useStyleFirstPageButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

const FirstPageButton = ({ title, source }) => {
    const navigation = useNavigation();
    const goCart = () => navigation.push(ROUTES_CONFIG.firstPage.name);
    const styles = useStyleFirstPageButton();
    return (
        <TouchableOpacity onPress={goCart}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={source}/>
            </View>
        </TouchableOpacity>
    )
}
export default observer(FirstPageButton);