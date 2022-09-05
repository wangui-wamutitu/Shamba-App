import { useContext } from 'react';
import { StyleSheet, ScrollView, View, Text, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../../context/AuthContext';

function Login() {
    const navigation = useNavigation()
    const {login} = useContext(AuthContext)
    return(
        <ScrollView style={styles.container} >
            <View style={styles.loginContainer}>
                <View style={styles.subLoginContainer}>
                    <Image
                    style={{width:100,height:70,marginTop:10, resizeMode:"contain"}}
                    source= {require('../../../assets/images/logo1.png')}
                    />
                    <Text style={styles.title}>Sign In</Text>
                    
                    <View style={{width:"90%", height: 80, marginBottom:20}}>
                        <Text>Email Address</Text> 
                        <TextInput style={styles.inputField} placeholder='admin@cooperative.com' keyboardType='email-address'/>
                    </View>
                    <View style={{width:"90%", height: 80, marginBottom:20}}>
                        <Text>Password</Text>
                        <TextInput style={styles.inputField} placeholder='......' textContentType='password' secureTextEntry={true}/>
                    </View>
                    <View  style={{width:"90%", height: 140, justifyContent:"space-between", marginVertical:20}}>
                        <TouchableOpacity 
                            onPress={() => {login()}} 
                            style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Log In</Text>
                        </TouchableOpacity>
                        <Text style={{textAlign:"center"}}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button} >
                            <Text style={{textAlign:"center",color:"#fff",fontWeight:"bold", fontSize:16, paddingTop: 15}}>Go to Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default Login;
const {width, height} = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        backgroundColor:"#13c232"
    },    
    loginContainer: {
        flex:1,
        width:width,
        height:height,
        flexDirection:"column",
        alignItems:"center",
        paddingTop:100,
    },
    title : {
        fontSize: 24,
        fontWeight:"600",
        paddingBottom:5,
        borderBottomWidth: 1,
        marginBottom:10
    },
    subLoginContainer:{
        width:"85%",
        height:"80%",
        flexDirection:"column",
        alignItems:"center",
        backgroundColor:'#ffffff',
        borderRadius:10
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor:"#13c232",
        borderRadius:20,
    },
    inputField: {
        width: "100%",
        height: 45,
        textAlign:"left",
        padding:10,
        marginTop:20,
        borderRadius:10,
        borderWidth: 1,
        borderColor:"#000"
    }
});