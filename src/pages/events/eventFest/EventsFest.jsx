import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const EventsFest = () => {

return (
<LayoutEvent imageBackground={require('../../../assets/images/dev/fest.png')} />
)}
export default observer(EventsFest);