import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function SplashScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/screen-img/splash-screen.png")} style={styles.splashScreenStyle}/>
        <Text style={styles.textStylep1}>Get things done with Plan it Easy</Text>
        <Text style={styles.textStylep2}>Plant It Easy is an mobile application where you can find people who offers different services to organize your event.</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'white', fontSize: 20}}>Get Started</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: '#5D5973',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashScreenStyle:{
    // borderWidth: 1,
    // borderColor: 'red',
    height: 290,
    width: 290
  },
  textStylep1: {
    // borderWidth: 1,
    // borderColor: 'red',
    color: '#FFFCC7',
    fontWeight: 'bold',
    fontSize: 18,
    width: 290
  },
  textStylep2: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: 290,
    color: 'white',
    fontSize: 13,
  },
  btnContainer:{
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2F2E41',
    height: 50,
    width: 290,
    marginTop: 30,
    borderRadius: 10,
  },
});
