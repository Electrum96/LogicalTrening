import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleOrderedPage from './useStyleOrderedPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';

const OrderedPage = () => {

    const styles = useStyleOrderedPage();
    return (
        <LayoutMain color={COLORS.backgrounColor}>
            <Image style={styles.logo} source={require('../../assets/images/decotarion/logoDone.png')} />
            <View style={styles.contentBox}>
                <Image style={styles.stars} source={require('../../assets/images/decotarion/starsLight.png')} />
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Спасибо за заказ!</Text>
                    <Image style={styles.code} source={require('../../assets/images/decotarion/code.png')}/>
                </View>
            </View>

        </LayoutMain>
    )
}
export default observer(OrderedPage);