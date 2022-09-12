import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [newSkill, setNewSkill] = useState();

  // amarzenando as skills 
  const [mySkills, setMySkills] = useState([]);

  // função disparada por ação do usuario
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]); //sprad operator(...) pega o ultimo valor do mySkills
  }

  return (
    <View style={estilos.container}>
      <StatusBar style="light" />
      <Text style={estilos.title}>Salve, Gustavo</Text>
      <TextInput onChangeText={setNewSkill}
        placeholderTextColor='#555'
        placeholder='New Skill'
        style={estilos.input} />
      <TouchableOpacity onPress={handleAddNewSkill} style={estilos.button}>
        <Text style={estilos.buttonText}>ADD</Text>
      </TouchableOpacity>
      <Text style={[estilos.title, { color: 'white' }]}>
        Suas Skills
      </Text>

      {
        mySkills.map(skill => (
          <TouchableOpacity style={estilos.buttonSkill}>
            <Text style={estilos.textSkill}>
              {skill}
            </Text>
          </TouchableOpacity>
        ))
      }
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
    color: 'white',
    padding: 14,
    marginTop: 30,
    borderRadius: 4,
    fontSize: 18,
    width: 325,
    marginLeft: 25
  },
  button: {
    backgroundColor: 'purple',
    width: 50,
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 300,
    padding: 5,
    marginVertical: 15,
    fontWeight: 'bold'

  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },

  textSkill: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 18,
  },

  buttonSkill: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#1F1e25',
    width: 325,
    marginLeft: 25,
    marginTop: 20,
    alignItems: 'center'





  }

});

