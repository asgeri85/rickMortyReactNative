import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import styles from './CharacterCard.style';

const CharacterCard = ({character, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: character.image}} style={styles.image} />
        <Text style={styles.title}>{character.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CharacterCard;
