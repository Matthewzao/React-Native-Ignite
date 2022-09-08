import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [newSkill, setNewSkil] = useState();

  return (
    <View style={estilos.container}>
      <StatusBar style="light" />
      <Text style={estilos.title}>Welcome, Matthew</Text>
      <TextInput onChangeText={setNewSkil} placeholderTextColor='#555' placeholder='New Skill' style={estilos.input} />
      <TouchableOpacity style={estilos.button}>
        <Text style={estilos.buttonText}>ADD</Text>
      </TouchableOpacity>
      <Text style={[estilos.title, { color: 'white' }]}>
        {newSkill}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 80

  },
  title: {
    color: 'white',
    marginLeft: 25,
    fontSize: 25,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1e25',
    color: 'red',
    padding: 14,
    marginTop: 30,
    borderRadius: 6,
    fontSize: 18,
    width: 350,
    marginLeft: 11
  },
  button: {
    backgroundColor: 'purple',
    width: 50,
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 310,
    padding: 5,
    marginVertical: 15,
    fontWeight: 'bold'

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  // skills: {
  //   color: 'white',
  //   marginLeft: 25,
  //   fontSize: 25,
  //   fontWeight: 'bold'
  // }

});

