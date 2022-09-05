import { ScrollView,FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { GenderPie } from "../../../charts/Chart";

const Dashboard = () => {
    return(
        <View style={styles.mainContainer}>
        <ScrollView>
            <ScrollView horizontal={true} style={{height:200, marginTop:15}}>
                <View style={{height:'100%', width:350, backgroundColor:"#cefad0", borderRadius:20, justifyContent:"space-around", alignItems:"center", marginHorizontal:10 }}>
                    <GenderPie/>
                </View>
                <View style={{height:'100%', width:350, backgroundColor:"#cefad0", borderRadius:20, justifyContent:"space-around", alignItems:"center", marginHorizontal:10 }}>
                    <Text style={{fontSize:16}}>Farmers</Text>
                    <Text style={{fontSize:18,fontWeight:'bolder'}}>268</Text>
                </View>
                <View style={{height:'100%', width:350, backgroundColor:"#ffbbc1", borderRadius:20, justifyContent:"space-around", alignItems:"center", marginHorizontal:10 }}>
                    <Text style={{fontSize:16}}>Farmers</Text>
                    <Text style={{fontSize:18,fontWeight:'bolder'}}>268</Text>
                </View>
                <View style={{height:'100%', width:350, backgroundColor:"#fffbc8", borderRadius:20, justifyContent:"space-around", alignItems:"center", marginHorizontal:10 }}>
                    <Text style={{fontSize:16}}>Farmers</Text>
                    <Text style={{fontSize:18,fontWeight:'bolder'}}>268</Text>
                </View>
            </ScrollView>
            <View style={{height:viewHeight ,flex:1, justifyContent:"space-around", alignItems:'center'}}>
                <View style={{height:90, backgroundColor:"#cefad0", width:350, borderRadius:10, paddingHorizontal:20, elevation: 20, shadowColor: '#000', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text>Farmers</Text>
                    <Text>268</Text>
                </View>
                <View style={{height:90, backgroundColor:"#ffbbc1", width:350, borderRadius:10, paddingHorizontal:20, elevation: 20, shadowColor: '#000', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text>Farmers</Text>
                    <Text>268</Text>
                </View>
                <View style={{height:90, backgroundColor:"#fffbc8", width:350, borderRadius:10, paddingHorizontal:20, elevation: 20, shadowColor: '#000', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text>Farmers</Text>
                    <Text>268</Text>
                </View>
                <View style={{height:90, backgroundColor:"#add8e6", width:350, borderRadius:10, paddingHorizontal:20, elevation: 20, shadowColor: '#000', flexDirection:"row",justifyContent:"space-between", alignItems:"center"}}>
                    <Text>Farmers</Text>
                    <Text>268</Text>
                </View>
            </View>
        </ScrollView>
        </View>
    )
}
export default Dashboard;
const {width, height} = Dimensions.get("window")
const viewHeight = height - 200
const styles = StyleSheet.create({
    mainContainer:{
        height:height,
        width:width,
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#fff"
    }
})