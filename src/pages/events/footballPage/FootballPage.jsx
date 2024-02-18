import { observer } from 'mobx-react-lite';
import LayoutEvent from '../../../components/layoutEvent/LayoutEvent';

const FootballPage = () => {

    return (
        <LayoutEvent imageBackground={require('../../../assets/images/dev/eventsImages/football.png')} />
    )

}
export default observer(FootballPage);