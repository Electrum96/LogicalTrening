import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const PizzaPage = () => {

    return (
        <LayoutEvent imageBackground={require('../../../assets/images/dev/eventsImages/pizza.png')} />
    )
}
export default observer(PizzaPage);