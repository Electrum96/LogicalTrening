import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import OvalButton from '../../components/ovalButton/OvalButton';

import useStyleReservePage from './useStyleReservePage';

import Header from '../../components/header/Header';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../routes/routesConfig';

const ReservePage = () => {
    const navigation = useNavigation();
    const goDone = () =>  navigation.push(ROUTES_CONFIG.done.name)

    const styles = useStyleReservePage();
    return (
        <View style={styles.contentWrapper}>
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title}>Забронируйте Ваш столик </Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.inputs}>name</TextInput>
                    <TextInput style={styles.inputs}>E-mail</TextInput>
                    <TextInput style={styles.inputs}>phone number</TextInput>
                    <TextInput style={styles.inputs}>data time</TextInput>
                    <TextInput style={styles.inputs}>table number</TextInput>
                </View>

                <View style={styles.buttonBox}>
                    <OvalButton title={'Забронировать'} onPress={goDone} />
                </View>
            </View>
            <View style={styles.headerBox}>
                <Header />
            </View>
            <View />
        </View>

    )
}
export default observer(ReservePage);