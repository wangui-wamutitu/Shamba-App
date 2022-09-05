import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../components/admin/landing/Landing';
import Login from '../components/admin/auth/Login';
import Register from '../components/admin/auth/Register';
import Dashboard from '../components/admin/dashboard/Dashboard';
const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false }}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard}/>
    </Stack.Navigator>
  );
}

