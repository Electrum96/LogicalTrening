import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleDonePage from './useStyleDonePage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';

const DonePage = () => {

    const styles = useStyleDonePage();
    return (
        <LayoutMain color={COLORS.backgrounColor}>
            <View style={styles.container}>
            <Image  style={styles.logo} source={require('../../assets/images/decotarion/logoDone.png')} />
            <View style={styles.contentBox}>
                <Image style={styles.stars} source={require('../../assets/images/decotarion/stars.png')} />
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Ваш столик успешно
                        забронирован!</Text>
                </View>
            </View>
            </View>

        </LayoutMain>
    )
}
export default observer(DonePage);