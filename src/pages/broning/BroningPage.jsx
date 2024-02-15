import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleBroningPage from './useStyleBroningPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import LongButton from '../../components/longButton/LongButton';
import { COLORS } from '../../assets/styles/variables';

const BroningPage = () => {

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
                    <LongButton title={'Забронировать'} color={COLORS.blue} onPress />
                    </View>
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(BroningPage);