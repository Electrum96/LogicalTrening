import {Text, View, Image} from 'react-native';

import useStyleCounterPage from './useStyleCounterPage';

import Layout from '../../components/layout/Layout';
import Counter from '../../components/counter/Counter';

const CounterPage = () => {
  const styles = useStyleCounterPage();
  return (
    <Layout>
      <Counter color="red" />
      <Counter color="green" />
    </Layout>
  );
};

export default CounterPage;
