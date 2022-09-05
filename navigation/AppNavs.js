import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {View, ActivityIndicator} from 'react-native'
import AuthNavigator from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../context/AuthContext';

export default function AppNavs() {
    const {isLoading, userToken} = useContext(AuthContext)
    if(isLoading){
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <ActivityIndicator size={'large'}/>
        </View>
    }
  return (
    <NavigationContainer>
        {userToken !== null ? 
            <AppNavigation/>
            :<AuthNavigator/>
        }
        
    </NavigationContainer>
  );
}

