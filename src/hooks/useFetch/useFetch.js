import {useState, useCallback} from 'react';
import axios from 'axios';

const useFetch = URL => {
  const [episodeList, setEpisodeList] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [characterList, setCharacterList] = useState([]);

  const getEpisodeData = useCallback(async () => {
    try {
      const {data} = await axios.get(`${URL}episode`);
      setEpisodeList(data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [URL]);

  const getCharactersData = useCallback(async episodeUrl => {
    try {
      const {data} = await axios.get(episodeUrl);
      const {characters} = data;
      for (let key in characters) {
        const {data: response} = await axios.get(characters[key]);
        setCharacterList(oldList => [...oldList, response]);
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return {
    episodeList,
    loading,
    error,
    getEpisodeData,
    characterList,
    getCharactersData,
  };
};

export default useFetch;
