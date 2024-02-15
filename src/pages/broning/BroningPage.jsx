import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleBroningPage from './useStyleBroningPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import LongButton from '../../components/longButton/LongButton';
import { COLORS } from '../../assets/styles/variables';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../routes/routesConfig';

const BroningPage = () => {
    const navigation = useNavigation();
    const goReserved = () => navigation.push(ROUTES_CONFIG.reserved.name);

    const styles = useStyleBroningPage();
    return (
        <View style={styles.container}>
            <LayoutMain>
                <Text style={styles.title}>Бронирование столика</Text>
                <View style={styles.contentWrap}>
                    <View style={styles.form}>
                        <TextInput style={styles.inputs}>Имя</TextInput>
                        <TextInput style={styles.inputs}>Номер телефона</TextInput>
                        <TextInput style={styles.inputs}>Дата</TextInput>
                        <TextInput style={styles.inputs}>Время</TextInput>
                        <TextInput style={styles.inputs}>Столик</TextInput>
                    </View>
                    <View style={styles.btnContainer}>
                    <LongButton title={'Забронировать'} color={COLORS.blue} onPress={goReserved} />
                    </View>
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(BroningPage);