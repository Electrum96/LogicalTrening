import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleOrderedPage from './useStyleOrderedPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';
import Header from '../../components/header/Header';

const OrderedPage = () => {

    const styles = useStyleOrderedPage();
    return (
        <View style={styles.pageWrapper}>
            <View>
                <Image style={styles.logo} source={require('../../assets/images/decotarion/logoDone.png')} />
                <Image style={styles.stars} source={require('../../assets/images/decotarion/starsLight.png')} />
            </View>

            <View style={styles.titleBox}>
                <Text style={styles.title}>Спасибо за заказ!</Text>
                <Image style={styles.code} source={require('../../assets/images/decotarion/code.png')} />
            </View>
            <View style={styles.headerWrapper}>
                <Header />
            </View>
        </View>
    )
}
export default observer(OrderedPage);