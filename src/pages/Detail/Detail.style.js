import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('screen');

export default StyleSheet.create({
  image: {
    height: device.height / 3,
    margin: 10,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  titleContainer: {
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
  },
  status: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
