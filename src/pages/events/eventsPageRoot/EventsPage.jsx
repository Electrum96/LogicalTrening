import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleEventsPage from './useStyleEventsPage';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import { COLORS } from '../../../assets/styles/variables';
import List from '../../../components/list/List';
import events from '../../../assets/data/events';
import CelebrateItem from '../../../components/celebrateItem/CelebrateItem';

const EventsPage = () => {

    const styles = useStyleEventsPage();
    return (
        <LayoutMain color={COLORS.backgroundSalad}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Спортивные трансляции</Text>
            </View>
            <List data={events} Component={CelebrateItem}/>
        </LayoutMain>
    )
}
export default observer(EventsPage);