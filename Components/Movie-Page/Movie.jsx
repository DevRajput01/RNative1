import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Movie = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Movie Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 390,
    backgroundColor: '#282a2b',
  },
  text: {
    fontSize: 20,
    color:'#fff',
  },
});

export default Movie;
