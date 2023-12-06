import {Text, View, Image} from 'react-native';

import useStyleRootHome from './useStyleRootHome';

import {ARRAY_BUTTONS} from '../../../routes/routesConfig';
import ItemHome from '../itemHome/ItemHome';
import List from '../../../components/list/List';
import Container from '../../../components/container/Container';

const RootHome = () => {
  const styles = useStyleRootHome();
  return (
    <Container>
      <View style={styles.listWrap}>
        <List data={ARRAY_BUTTONS} Component={ItemHome} />
      </View>
    </Container>
  );
};

export default RootHome;
