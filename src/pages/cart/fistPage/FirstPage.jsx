import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleFirstPage from './useStyleFirstPage';
import List from '../../../components/list/List';
import ButtonIcon from '../../../components/buttonIcon/ButtonIcon';
import { COLORS } from '../../../assets/styles/variables';
import filterButtons from '../../../assets/data/filterButtons';
import FirstPageButton from '../firstPageButton/FirstPageButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

const FirstPage = () => {
    const navigation = useNavigation();
    const goBasket = () => navigation.push(ROUTES_CONFIG.basket.name);
    const styles = useStyleFirstPage();
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
            <Image  style={styles.logo}source={require('../../../assets/images/dev/logo/LogoCartPage.png')} />
            </View>
            <List data={filterButtons} Component={FirstPageButton} />
            <ButtonIcon icon={'shopping-cart'} onPress={goBasket} color={COLORS.light} size={60}/>
        </View>
    )
}
export default observer(FirstPage);