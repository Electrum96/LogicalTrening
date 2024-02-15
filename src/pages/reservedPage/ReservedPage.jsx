import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import useStyleReservedPage from './useStyleReservedPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';

const ReservedPage = () => {

const styles = useStyleReservedPage();
return (
    <View style={styles.container}>
    <LayoutMain>
        <View style={styles.contentBox}>
            <Image style={styles.image} source={require('../../assets/images/dev/logo/Vector.png')} />
            <View style={styles.titleBox}>
                <Text style={styles.title}>Ваш столик забронирован</Text>
            </View>
        </View>
    </LayoutMain>
</View>
)}
export default observer(ReservedPage);