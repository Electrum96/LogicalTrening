import { observer } from 'mobx-react-lite';
import { Text, View, TouchableOpacity } from 'react-native';

import productStore from '../../../store/productStore';

import useStyleFilterButton from './useStyleFilterButton';


const FilterButton = tab => {
    const { title, classTab } = tab;
    
    const { filterProduct, filter } = productStore;

    const isActive = classTab === filter.classTab;

    const styles = useStyleFilterButton(isActive);
    return (
        <TouchableOpacity onPress={() => filterProduct(tab)}>
            <View style={styles.buttonWrap}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default observer(FilterButton);