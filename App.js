import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SplashScreen from './module/SplashScreen';
import LogInScreen from './module/LogInScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from './module/SignUpScreen';
import VerificationScreen from './module/VerificationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LogInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Sign Up" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Verification" component={VerificationScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5D5973',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
