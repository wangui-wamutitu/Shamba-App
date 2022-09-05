import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

const Farmers = () => {
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.dashContainer}>
                <Text style={{fontSize:24, fontWeight:"bolder", color:"#000"}}>Farmers</Text>
            </View>
        </ScrollView>
    )
}
export default Farmers;
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    dashContainer: {
        width:width,
        height:height,
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
})