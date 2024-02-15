import { Text, View, Image, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';

import { useNavigation } from '@react-navigation/native';
import { ROUTES_CONFIG } from '../../../routes/routesConfig';

import productStore from '../../../store/productStore';

import useStyleFirstPageButton from './useStyleFirstPageButton';

const FirstPageButton = tab => {
    const { title, source} = tab;

    const {filterProduct} = productStore;
    
    const navigation = useNavigation();
    const goCart = () => navigation.push(ROUTES_CONFIG.firstPage.name);

     const handler = (tab) => {
        filterProduct(tab),
        goCart()
    }

    const styles = useStyleFirstPageButton();
    return (
        <TouchableOpacity onPress={() => handler(tab)}>
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                <Image style={styles.image} source={source}/>
            </View>
        </TouchableOpacity>
    )
}
export default observer(FirstPageButton);