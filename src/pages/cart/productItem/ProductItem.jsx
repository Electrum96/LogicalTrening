import {Text, View, Image} from 'react-native';
import {observer} from 'mobx-react-lite';

import useStyleProductItem from './useStyleProductItem';

const ProductItem = ({title, image, desc, price}) => {

const styles = useStyleProductItem();
    return (
        <View style={styles.wrapper}>
            <Image source={image}/>
            <Text >{title}</Text>
            <Text>{desc}</Text>
            <Text>{price}</Text>
        </View>
    )
}

export default observer(ProductItem);