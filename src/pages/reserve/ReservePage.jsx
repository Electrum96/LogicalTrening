import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import OvalButton from '../../components/ovalButton/OvalButton';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import useStyleReservePage from './useStyleReservePage';
import { COLORS } from '../../assets/styles/variables';
import Header from '../../components/header/Header';

const ReservePage = () => {

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
                    <TextInput style={styles.inputs}>number phone</TextInput>
                    <TextInput style={styles.inputs}>data time</TextInput>
                    <TextInput style={styles.inputs}>table number</TextInput>
                </View>

                <View style={styles.buttonBox}>
                    <OvalButton title={'Забронировать'} />
                </View>
            </View>
            <Header />
            <View />
            </View>

            )
}
            export default observer(ReservePage);