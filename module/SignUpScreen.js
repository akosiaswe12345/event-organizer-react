import { StyleSheet, Text, View, SafeAreaView,TouchableOpacity, Image, TextInput } from 'react-native';

export default function SignUpScreen(){
return(
    <SafeAreaView style={StyleSheet.container}>
        <View style={styles.inputsContainer}>
            <Text style={{color: 'white'}}>Email:</Text>
            <TextInput style={styles.txtInputStyles}/>
            
            <Text style={{color: 'white'}}>Firstname:</Text>
            <TextInput style={styles.txtInputStyles}/>

            <Text style={{color: 'white'}}>Lastname:</Text>
            <TextInput style={styles.txtInputStyles}/>
        </View>
    </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#5D5973',
        alignItems: 'center'
    },
})