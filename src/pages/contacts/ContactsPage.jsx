import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleContactsPage from './useStyleContactsPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';

const ContactsPage = () => {

    const styles = useStyleContactsPage();
    return (
        <View style={styles.pageWrapper}>
            <LayoutMain>
                <Text style={styles.pageTitle}>Контакты</Text>
                <View style={styles.box}>
                <View style={styles.form}>
                    <TextInput style={styles.inputs}>Имя</TextInput>
                    <TextInput style={styles.inputs}>Номер телефона</TextInput>
                    <TextInput style={styles.inputs}>E-mail</TextInput>
                    <TextInput style={styles.inputs}>Индекс</TextInput>   
                </View>
                <Image  style={styles.logo} source={require('../../assets/images/dev/logo/LogoCartPage.png')} />
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(ContactsPage);