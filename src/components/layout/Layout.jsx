import {Text, View, Image} from 'react-native';

import useStyleLayout from './useStyleLayout';

const Layout = ({children}) => {

const styles = useStyleLayout({color: 'yellow'});
    return (
        <View style={styles.layoutWrap}>
            {children}
        </View>
    )
}

export default Layout;