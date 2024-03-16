import { Text, View, Image, ScrollView, ImageBackground } from 'react-native';

import useStyleLayoutMain from './useStyleLayoutMain';
import Container from '../container/Container';
import Header from '../header/Header';
import { useRoute } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../routes/routesConfig';
import List from '../list/List';
import filterButtons from '../../assets/data/filterButtons';
import FilterButton from '../../pages/cart/filterButton/FilterButton';

const LayoutMain = ({ children, color, imageBackground }) => {
    const { name } = useRoute();
    const isShowButtons = name === ROUTES_CONFIG.cart.name;


    const styles = useStyleLayoutMain(color);
    return (
        <ImageBackground source={imageBackground} style={styles.layout}>
            {isShowButtons && <View style={styles.listBox}>
                    <List data={filterButtons} Component={FilterButton} />
            </View>  }
            <View style={styles.main}>
                <Container full={true}>{children}</Container>
            </View>
            <View style={styles.navigation}>
                <Header />
            </View>
        </ImageBackground>
    )
}

export default LayoutMain;