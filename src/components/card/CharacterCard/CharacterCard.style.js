import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    height: 150,
    resizeMode: 'contain',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  container: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    width: '45%',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
