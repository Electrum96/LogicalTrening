import { observer } from 'mobx-react-lite';
import useStyleFilterButton from './useStyleFilterButton';
import { Text, View, TouchableOpacity } from 'react-native';

import productStore from '../../../store/productStore';

const FilterButton = tab => {
    const { title, classTab } = tab;

    const { filterProduct, filterTitle } = productStore;

    const isActive = classTab === filterTitle.classTab;


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