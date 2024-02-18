import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleContactsPage from './useStyleContactsPage';
import LayoutMain from '../../components/layoutMain/LayoutMain';

const ContactsPage = () => {

    const styles = useStyleContactsPage();
    return (
        <View style={styles.pageWrapper}>
            <LayoutMain>
                <Text style={styles.pageTitle}>Контакти</Text>
                <View style={styles.box}>
                <View style={styles.form}>
                    <TextInput style={styles.inputs}>Београд</TextInput>
                    <TextInput style={styles.inputs}>+381 61 3050101</TextInput>
                    <TextInput style={styles.inputs}>Народних хероја 63,</TextInput>
                    <TextInput style={styles.inputs}>11070</TextInput>   
                </View>
                <Image  style={styles.logo} source={require('../../assets/images/dev/logo/LogoCartPage.png')} />
                </View>
            </LayoutMain>
        </View>
    )
}
export default observer(ContactsPage);