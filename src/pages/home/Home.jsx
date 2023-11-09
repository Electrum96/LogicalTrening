import {Text, View, Image} from 'react-native';

import useStyleHome from './useStyleHome';

import Layout from '../../components/layout/Layout';

const Home = ({navigation}) => {

const styles = useStyleHome();
    return (
    <Layout navigation={navigation} title={'Home'}>
        <View>
            <Text>Home</Text>
        </View>
        </Layout>
    )
}

export default Home;