import {Text, View, Image} from 'react-native';

import useStyleHome from './useStyleHome';

const Home = () => {

const styles = useStyleHome();
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}

export default Home;