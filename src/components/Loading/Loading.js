import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={require('../../assets/loadingAnim.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
