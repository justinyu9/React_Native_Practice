import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Swipe_Page from './screens/swipe';

export default function App() {
  return (
    <View style={styles.container}>
        <Swipe_Page/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white"
  }
});
