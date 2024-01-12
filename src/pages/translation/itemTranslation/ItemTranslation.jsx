import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleItemTranslation from './useStyleItemTranslation';

const ItemTranslation = ({time, team1, team2, liga}) => {

    const styles = useStyleItemTranslation;
    return (
        <View style={styles.container}>
            <Text>{time}</Text>
            <Text>{team1}</Text>
            <Text>{team2}</Text>
            <Text>{liga}</Text>
        </View>
    )
}
export default observer(ItemTranslation);