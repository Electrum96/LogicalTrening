import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import LongButton from '../../components/longButton/LongButton';
import useStyleConfirmPage from './useStyleConfirmPage';
import { COLORS } from '../../assets/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../routes/routesConfig';

const ConfirmPage = () => {
    const navigation = useNavigation();
    const goMain = () => navigation.push(ROUTES_CONFIG.main.name);

    const styles = useStyleConfirmPage();
    return (
        <View style={styles.container}>
            <LayoutMain>
                <View style={styles.contentBox}>
                    <Image style={styles.image} source={require('../../assets/images/dev/logo/qrCode.png')} />
                    <LongButton title={'Спасибо за заказ!'} color={COLORS.accentBg} onPress={goMain}/>
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(ConfirmPage);