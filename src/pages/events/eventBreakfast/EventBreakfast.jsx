import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const EventBreakfast = () => {

return (
<LayoutEvent imageBackground={require('../../../assets/images/dev/breakfast.png')}/>

)}
export default observer(EventBreakfast);