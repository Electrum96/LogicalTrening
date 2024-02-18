import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import useStyleConfirmPage from './useStyleConfirmPage';



const ConfirmPage = () => {
   

    const styles = useStyleConfirmPage();
    return (
        <View style={styles.container}>
            <LayoutMain>
                <View style={styles.contentBox}>
                    <Image style={styles.image} source={require('../../assets/images/dev/logo/qrCode.png')} />
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Хвала на поруџбини!</Text>
                    </View>
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(ConfirmPage);