import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleDonePage from './useStyleDonePage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/header/Header';

const DonePage = () => {
  

    const styles = useStyleDonePage();
    return (
        <View style={styles.pageWrapper}>
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
            <View style={styles.headerWrapper}>
            <Header/>
            </View>

        </View>
    )
}
export default observer(DonePage);