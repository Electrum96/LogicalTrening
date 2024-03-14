import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootTranslation from "./useStyleRootTranslation";

import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemTranslation from '../itemTranslation/ItemTranslation';

import { COLORS } from '../../../assets/styles/variables';
import { TRANSLATION_ARRAY } from '../../../assets/data/translation';

const RootTranslation = () => {

    const styles = useStyleRootTranslation();
    return (
        <LayoutMain color={COLORS.backgroundSalad}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Спортивные трансляции</Text>
            </View>
            <ScrollView contentContainerStyle={styles.listContainer}>
                <List data={TRANSLATION_ARRAY} Component={ItemTranslation} />
            </ScrollView>
        </LayoutMain>
    )
}

export default RootTranslation;