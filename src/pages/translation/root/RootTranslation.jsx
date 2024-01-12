import {Text, View, Image, ScrollView} from 'react-native';

import useStyleRootTranslation from "./useStyleRootTranslation";

import translation from '../../../assets/data/translation';
import LayoutMain from '../../../components/layoutMain/LayoutMain';
import List from '../../../components/list/List';
import ItemTranslation from '../itemTranslation/ItemTranslation';

const RootTranslation = () => {

    const styles = useStyleRootTranslation();
    return (
        <LayoutMain>
            <ScrollView>
                <List data={translation} Component={ItemTranslation} />
            </ScrollView>
        </LayoutMain>
    )
}

export default RootTranslation;