import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const EventArt = () => {


    return (
        <LayoutEvent imageBackground={require('../../../assets/images/dev/art.png')}/>
    )
}
export default observer(EventArt);