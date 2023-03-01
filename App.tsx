import React, { useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet, } from 'react-native';
import axios from 'axios';
function renderItems({ item }) {
  return (
    <View>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text}>{item.username}</Text>
        <Text style={styles.text}>{item.email}</Text>
      </TouchableOpacity>
    </View>
  )
}
function App() {
  const [userList, setUserList] = useState();
  async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUserList(response.data);
  }
  return (
    <View>
      <FlatList data={userList} renderItem={renderItems} />
      <Button title="bas" onPress={getData} />
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    margin: 2,
  },
  touch: {
    flex: 1,
    paddingVertical: 25,
    borderBottomWidth: 2,
  },

})