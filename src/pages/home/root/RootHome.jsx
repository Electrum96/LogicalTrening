import {Text, View, Image} from 'react-native';

import useStyleRootHome from './useStyleRootHome';

import {ARRAY_BUTTONS} from '../../../routes/routesConfig';
import ItemHome from '../itemHome/ItemHome';
import List from '../../../components/list/List';
import Container from '../../../components/container/Container';

const RootHome = () => {
  const styles = useStyleRootHome();
  return (
    <View style={styles.pageWrapper}>
    
      <View style={styles.logoWrapper}>
        {/* <Image style={styles.logo} source={require('../../../assets/images/decotarion/logoYellow.png')}/> */}
      </View>

    <Container>
      <View style={styles.listWrap}>
        <List data={ARRAY_BUTTONS} Component={ItemHome} />
      </View>
    </Container>

    <View style={styles.footer}>
      <Image style={styles.image} source={require('../../../assets/images/decotarion/stars.png')}/>
    </View>

    </View>
  );
};

export default RootHome;
