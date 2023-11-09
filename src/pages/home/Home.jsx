import {Text, View, Image} from 'react-native';

import useStyleHome from './useStyleHome';

import Layout from '../../components/layout/Layout';

const Home = () => {

const styles = useStyleHome();
    return (
    <Layout>
        <View>
            <Text>Home</Text>
        </View>
        </Layout>
    )
}

export default Home;