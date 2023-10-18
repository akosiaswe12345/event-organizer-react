import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SplashScreen from './module/SplashScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View>

     <SplashScreen />
    </View>
    </SafeAreaView>
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
