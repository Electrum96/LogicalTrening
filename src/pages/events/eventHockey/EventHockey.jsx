import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const EventHockey = () => {
    return (
        <LayoutEvent imageBackground={require('../../../assets/images/dev/hockey.png')} />
    )
}
export default observer(EventHockey);