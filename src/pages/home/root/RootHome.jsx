import {Text, View, Image} from 'react-native';

import useStyleRootHome from './useStyleRootHome';

import { ARRAY_BUTTONS } from '../../../routes/routesConfig';
import ItemHome from '../itemHome/ItemHome';



const RootHome = () => {




const styles = useStyleRootHome();
    return (
        <View>
            {ARRAY_BUTTONS.map((button) => <ItemHome key={button.id} {...button}/>)}
        </View>
    )
}

export default RootHome;