import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {globalStyles, images} from '../styles/global'
import Card from '../shared/card'

export default function ReviewDetails( { route, navigation } ){

  const { title, body, rating } = route.params;

  const pressHandler = () =>{
    // navigation.navigate('ReviewDetails');
    navigation.goBack();
  }

  return(
    <View style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Gamezone Rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    rating:{
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 16,
      marginTop: 16,
      borderTopWidth: 1,
      borderTopColor: '#eee',
    }
  });
