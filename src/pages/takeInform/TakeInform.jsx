import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleTakeInform from './useStyleTakeInform';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';

const TakeInform = () => {

    const styles = useStyleTakeInform();
    return (
        <LayoutMain color={COLORS.backgroundSalad}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Контакты</Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input}>Город</TextInput>
                    <TextInput style={styles.input}> Адрес</TextInput>
                    <TextInput style={styles.input}> Индекс</TextInput>
                    <TextInput style={styles.input}> Номер телефона</TextInput>
                    <TextInput style={styles.input}> E-mail</TextInput>
                </View>
            </View>
        </LayoutMain>
    )
}
export default observer(TakeInform);