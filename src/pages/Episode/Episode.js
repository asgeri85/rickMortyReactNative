import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import EpisodeCard from '../../components/card/EpisodeCard';
import Loading from '../../components/Loading';

const Episode = ({navigation}) => {
  const {episodeList, loading, error, getEpisodeData} = useFetch(
    Config.API_URL,
  );

  useEffect(() => {
    getEpisodeData();
  }, [getEpisodeData]);

  const onClickEpisode = url => {
    navigation.navigate('CharacterScreen', {url});
  };

  const renderEpisode = ({item}) => (
    <EpisodeCard episode={item} onPress={() => onClickEpisode(item.url)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={episodeList} renderItem={renderEpisode} />
    </View>
  );
};

export default Episode;
