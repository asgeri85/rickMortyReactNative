import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import CharacterCard from '../../components/card/CharacterCard';
import Loading from '../../components/Loading';

const Character = ({route, navigation}) => {
  const {url} = route.params;
  const {characterList, loading, error, getCharactersData} = useFetch(
    Config.API_URL,
  );

  useEffect(() => {
    getCharactersData(url);
  }, [getCharactersData, url]);

  const onClickCharacter = character => {
    navigation.navigate('DetailScreen', {character});
  };

  const renderCharacter = ({item}) => (
    <CharacterCard character={item} onPress={() => onClickCharacter(item)} />
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList
        data={characterList}
        renderItem={renderCharacter}
        numColumns={2}
      />
    </View>
  );
};

export default Character;
