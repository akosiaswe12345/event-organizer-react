import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, TextInput } from 'react-native'


export default function LogInScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.logoContainer}>
        <Image source={require("../assets/screen-img/logo.png")} style={styles.logoStyle}/>
        <Text style={{color: 'white', fontSize:18, paddingBottom: 10}}>Log in with email</Text>
        <TextInput style={styles.txtInputStyles} placeholder='Enter Email'/>
        <Text style={{color:'white'}}>Didn't receive a code? 
            <TouchableOpacity>
                <Text style={{color:'#79DEFF'}}> Resend...</Text>
                </TouchableOpacity>
        </Text>
    


     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#5D5973',
        justifyContent: 'center',
    },
    logoContainer:{
        borderWidth: 1,
        borderColor: 'red',

        alignItems: 'center',
    },
    logoStyle: {
        // borderWidth: 1,
        // borderColor: 'red',
        width: 600,
        height: 380
    },
    txtInputStyles:{
        backgroundColor: '#FFFFFF',
        borderColor: 'red',
        height: 40,
        width: 280,
        fontSize: 20,
        borderRadius: 15
    }
})
