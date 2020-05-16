import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

export default function App() {

  const [authCode, setAuthCode] = useState('0');

  const onChangeText = (value) => {
    setAuthCode(value)
  }

  const login = () => {
    console.log('LOOL')
    Auth.signIn({
        username: 'jubyu',
        password: '',
      })
      .then(res =>{
          console.log('signed in!', res)
        })
      .catch(err=>{
          console.log('Signed in!', err)
        })
  }
  const signUp = () => {
    console.log('LOOL')
    Auth.signUp({
        username: 'jubyu',
        password: '',
        attributes:{
          email: '',
          phone_number:'',
        },
      })
      .then(res =>{
          console.log('signed up!', res)
        })
      .catch(err=>{
          console.log('Error Sign up!', err)
        })
  }

  const verify = () => {
    if (JSON.stringify({authCode}).replace(/[^0-9]/g,'') != '') {
      Auth.confirmSignUp('jubyu', JSON.stringify({authCode}).replace(/[^0-9]/g,''))
      .then(res =>{
          console.log('Verified!', res)
        })
      .catch(err=>{
          console.log('Error Verified!', err)
        })
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open AMLIFY up App.js to start working on your app!</Text>
      <TextInput placeholder='e.g John Doe' style={styles.input} onChangeText={(val)=>setAuthCode(val)}/>
      <Button onPress={()=>signUp()} title='Submit' color='coral'/>
      <Button onPress={()=>verify()} title='Verify' color='black'/>
      <Button onPress={()=>login()} title='Login' color='blue'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
