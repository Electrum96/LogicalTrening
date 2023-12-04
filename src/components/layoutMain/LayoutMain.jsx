import {Text, View, Image} from 'react-native';

import useStyleLayoutMain from './useStyleLayoutMain';
import Container from '../container/Container';
import Header from '../header/Header';

const LayoutMain = ({children}) => {

const styles = useStyleLayoutMain();
    return (
        <View style={styles.layout}>
            <View style={styles.header}>
            <Container>
               <Header/>
            </Container>
            </View>
            <View style={styles.main}>
               <Container>{children}</Container>
            </View>
        </View>
    )
}

export default LayoutMain;