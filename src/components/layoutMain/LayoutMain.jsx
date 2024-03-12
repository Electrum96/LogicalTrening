import { Text, View, Image } from 'react-native';

import useStyleLayoutMain from './useStyleLayoutMain';
import Container from '../container/Container';
import Header from '../header/Header';

const LayoutMain = ({ children}) => {

    const styles = useStyleLayoutMain();
    return (
        <View style={styles.layout}>
            <View style={styles.main}>
                <Container full={true}>{children}</Container>
            </View>
            <View style={styles.navigation}>
                    <Header />
            </View>
        </View>
    )
}

export default LayoutMain;