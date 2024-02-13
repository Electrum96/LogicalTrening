import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleItemTranslation from './useStyleItemTranslation';
import limitText from '../../../utils/utils';

const ItemTranslation = ({ time, team1, team2, liga, date }) => {

    const styles = useStyleItemTranslation();
    return (
        <View style={styles.container}>
            <View style={styles.ligaWrapper}>
            <Text style={styles.liga}>{limitText(liga, 6)}</Text>
            </View>
            <View style={styles.teamContainer}>
            <Text style={styles.team}>{team1}</Text>
            <Text style={styles.team}>{team2}</Text>
            </View>
            <View style={styles.timeWrap}>
            <Text style={styles.date}>{date}.02</Text>
            <Text style={styles.time}>{time}</Text>
            </View>

        </View>
    )
}
export default observer(ItemTranslation);