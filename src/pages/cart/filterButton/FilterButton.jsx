import {observer} from 'mobx-react-lite';
import useStyleFilterButton from './useStyleFilterButton';
import {Text, View, TouchableOpacity} from 'react-native';

import productStore from '../../../store/productStore';


const FilterButton = ({title, classTab}) => {
const styles = useStyleFilterButton();

const {filterProduct} = productStore;
    return (
        <TouchableOpacity onPress={() => filterProduct(classTab)}>
        <View style={styles.buttonWrap}>
            <Text style={styles.title}>{title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default observer(FilterButton);