import { ScrollView, View, Text, StyleSheet, Dimensions } from "react-native";

const Wallet = () => {
    return(
        <ScrollView style={styles.mainContainer}>
            <View style={styles.dashContainer}>
                <Text style={{fontSize:24, fontWeight:"bolder", color:"#000"}}>Wallet</Text>
            </View>
        </ScrollView>
    )
}
export default Wallet;
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