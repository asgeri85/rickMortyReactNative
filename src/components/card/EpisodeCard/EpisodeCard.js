import React from 'react';
import {TouchableWithoutFeedback, Text, View} from 'react-native';
import styles from './EpisodeCard.style';

const EpisodeCard = ({episode, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{episode.name}</Text>
        <Text style={styles.episode}>{episode.episode}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EpisodeCard;
