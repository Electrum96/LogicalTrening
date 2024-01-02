

const FilterButton = ({title}) => {
    const styles = useStyleFilterButton();

    return (
        <View style={styles.buttonWrap}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default observer(FilterButton);