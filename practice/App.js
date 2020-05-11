import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Justin'); // Now I can use {name} to display Justin,
                                              // firt paramater is the intial state, then
                                              // the next can be a funciton used later
  const [person, setPerson] = useState({name:'Mario', age:30});
  const [people, setPeople] = useState([
    {name:'Mario', id:'1'},
    {name:'Luigi', id:'2'},
    {name:'Peach', id:'3'},
    {name:'Yoshi', id:'4'},
    {name:'Bowser', id:'5'},
    {name:'Daisy', id:'6'},
  ]);
  const clickHandler = () =>{
    setName('Yu');
    setPerson({name:'Luigi', age:45});
  }
  const setAge = (val) =>{
    setPerson({age:val});
  }

  const pressHandler = (id) =>{
    console.log(id);
    setPeople((prevPeople)=>{
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          numColumns={2}
          keyExtractor={(item)=>(item.id)}
          data={people}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>pressHandler(item.id)}>
              <Text style={styles.flat_item}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <ScrollView>
          {people.map((item)=>{
            return(
              <View key={item.key}>
                <Text style={styles.scroll_item} >{item.name}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
      <Text>Enter Name</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g John Doe'
        onChangeText={(val)=>setName(val)}/>
      <TextInput
        keyboardType = 'numeric'
        style={styles.input}
        placeholder='e.g 99'
        onChangeText={(val)=>setAge(val)}/>
      <View style={styles.header}>
        <Text style={styles.boldText}> My name is {name}</Text>
        <Text style={styles.boldText}> Person name is {person.name} and his age is {person.age}</Text>
      </View>
      <View style={styles.body}>
        <Text> Test</Text>
        <Text> Test</Text>
        <Text> Test</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop:20,
  },
  input: {
    borderWidth:1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  flat_item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'blue',
    fontSize: 24,
    marginHorizontal:10,
    marginTop:20,
  },
  scroll_item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
