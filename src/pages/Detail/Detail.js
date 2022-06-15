import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {character} = route.params;

  return (
    <View>
      <Image source={{uri: character.image}} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.status}>Status: {character.status}</Text>
        <Text style={styles.status}>Species: {character.species}</Text>
      </View>
    </View>
  );
};

export default Detail;
