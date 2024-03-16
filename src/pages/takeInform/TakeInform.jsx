import { Text, View, Image, TextInput } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleTakeInform from './useStyleTakeInform';
import LayoutMain from '../../components/layoutMain/LayoutMain';
import { COLORS } from '../../assets/styles/variables';
import OvalButton from '../../components/ovalButton/OvalButton';

const TakeInform = () => {

    const styles = useStyleTakeInform();
    return (
        <LayoutMain imageBackground={require('../../assets/images/dev/bgc.png')}>
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Контакты</Text>
                </View>
                <View style={styles.form}>
                    <TextInput style={styles.input}>Минск</TextInput>
                    <TextInput style={styles.input}>улица Скрыганова, 4Д</TextInput>
                    <TextInput style={styles.input}>220073</TextInput>
                    <TextInput style={styles.input}>+375 29 563-77-13</TextInput>
                    <TextInput style={styles.input}> E-mail</TextInput>
                </View>
            </View>
        </LayoutMain>
    )
}
export default observer(TakeInform);