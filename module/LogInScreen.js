import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, TextInput } from 'react-native'


export default function LogInScreen() {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.logoContainer}>
        <Image source={require("../assets/screen-img/logo.png")} style={styles.logoStyle}/>
        <Text style={{color: 'white', fontSize:18, paddingBottom: 10}}>Log in with email</Text>
        <TextInput style={styles.txtInputStyles} placeholder='Enter Email'/>
        {/* <TouchableOpacity>
             <Text style={{color:'white', paddingTop: 5, fontSize: 10}}>Didn't receive a code? 
                <Text style={{color:'#79DEFF'}}> Resend...</Text>
            </Text>
        </TouchableOpacity> */}
        <View style={styles.btnContainerCode}>
            <TouchableOpacity>
            <Text style={{color: 'white', fontSize: 20}}>Send Verification Code</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainerSign}>
            <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
            <Text style={{color: 'white', fontSize: 20}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
     </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#5D5973',

        alignItems: 'center'
    },
    logoContainer:{
        alignItems: 'center',
        
    },
    logoStyle: {
        width: 600,
        height: 380
    },
    txtInputStyles:{
        backgroundColor: '#FFFFFF',
        height: 40,
        width: 310,
        fontSize: 20,
        borderRadius: 15
    },
    btnContainerCode:{
        backgroundColor: '#2F2E41',
        alignItems: 'center',
        justifyContent: 'center',
        width: 310,
        height: 50,
        borderRadius:10,
        marginTop: 20
    },
    btnContainerSign:{
        backgroundColor: '#2F2E41',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderRadius:10,
        marginTop: 180
    }
})
