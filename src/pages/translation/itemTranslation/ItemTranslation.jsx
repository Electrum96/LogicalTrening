import { Text, View, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import useStyleItemTranslation from './useStyleItemTranslation';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { COLORS } from '../../../assets/styles/variables';

const ItemTranslation = ({ time, team1, team2, liga, date }) => {

    const styles = useStyleItemTranslation();
    return (
        <View style={styles.container}>
            <View  style={styles.wrapper}>
                <FontAwesomeIcon icon={'star'} color={COLORS.darkStar} size={35}/>
                <View style={styles.teamBox}>
                <Text style={styles.team} numberOfLines={2}>{team1}</Text>
                <Text style={styles.team} numberOfLines={2}>{team2}</Text>
                </View>
            </View>
            <Text style={styles.date}>{date}.03.2024</Text>
            <Text style={styles.time}>{time}</Text>
           
        </View>
    )
}
export default observer(ItemTranslation);