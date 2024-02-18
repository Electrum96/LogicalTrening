import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const burgerPartyPage = () => {

    
    return (
        <LayoutEvent imageBackground={require('../../../assets/images/dev/eventsImages/burgerParty.png')} />
    )
}
export default observer(burgerPartyPage);