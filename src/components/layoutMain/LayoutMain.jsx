import {Text, View, Image} from 'react-native';

import useStyleLayoutMain from './useStyleLayoutMain';
import Container from '../container/Container';

const LayoutMain = ({children}) => {

const styles = useStyleLayoutMain();
    return (
        <View style={styles.layout}>
            <View style={styles.header}>
            <Container>
                <Text>text</Text>
            </Container>
            </View>
            <View style={styles.main}>
               <Container>{children}</Container>
            </View>
        </View>
    )
}

export default LayoutMain;