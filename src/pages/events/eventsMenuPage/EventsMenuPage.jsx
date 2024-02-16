import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleEventsMenuPage from './useStyleEventsMenuPage';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import { EVENTS_TABS } from '../../../routes/routesConfig';
import EventsButton from '../eventsButton/EventsButton';

const EventsMenuPage = () => {

    const styles = useStyleEventsMenuPage();
    return (
        <View style={styles.pageWrapper}>
            <LayoutMain>
                <Text style={styles.pageTitle}>Догађаји Овог месеца</Text>
                <View style={styles.listContainer}>
                    <List data={EVENTS_TABS} Component={EventsButton} />
                </View>
                <Image style={styles.logo} source={require('../../../assets/images/dev/logo/LogoCartPage.png')} />
            </LayoutMain>
        </View>
    )
}
export default observer(EventsMenuPage);