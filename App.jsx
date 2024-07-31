import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/Home-Page/Home';
import Movie from './Components/Movie-Page/Movie';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Movie />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a2b',
  },
});

export default App;
