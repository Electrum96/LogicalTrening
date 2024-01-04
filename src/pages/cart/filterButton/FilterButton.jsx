import {observer} from 'mobx-react-lite';
import useStyleFilterButton from './useStyleFilterButton';
import {Text, View, Image, ScrollView} from 'react-native';


const FilterButton = ({title}) => {
    const styles = useStyleFilterButton();

    return (

        <View style={styles.buttonWrap}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default observer(FilterButton);