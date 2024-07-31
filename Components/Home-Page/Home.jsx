import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button, FlatList, TouchableOpacity, ScrollView , Linking } from 'react-native';

const Home = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = () => {
    fetch(`https://www.omdbapi.com/?apikey=66b6fa5e&type=movie&s=${searchMovie}`)
      .then(response => response.json())
      .then(data => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch(error => console.error('Error fetching movies:', error));
  };

  const handleLearnMore = (movie) => {
    setSelectedMovie(movie);
  };

  return (
  <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Search Your Favorite Movies . . . . .</Text>
      <Image
        source={{ uri: 'https://www.plex.tv/wp-content/uploads/2021/05/image-avod-devices-all-may-2021-1024x620.png' }}
        style={styles.image}
      />


      <TextInput
        style={styles.input}
        placeholder="Search Movies..."
        placeholderTextColor="#999"
        value={searchMovie}
        onChangeText={setSearchMovie}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Search here"
          onPress={handleSearch}
        />
        <Button
          style={styles.button}
          title="Move to Website"
          onPress={() => Linking.openURL('https://devendra12.netlify.app/')}
        />
      </View>
      <Text style={styles.text1}>Searched Movies</Text>
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={item => item.imdbID}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.Poster }} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.Title}</Text>
                <Text style={styles.cardYear}>{item.Year}</Text>
                <Text style={styles.cardIMDBID}>{item.imdbID} </Text>

                <Button title="Know More" onPress={() => handleLearnMore(item)} />
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noResults}>No movies found.</Text>
      )}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#282a2b',
    alignItems: 'center',
    paddingBottom: 20,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
    color: '#fdfdff',
  },
  image: {
    width: 350,
    height: 200,
    margin: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  input: {
    height: 40,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 50,
    width: '80%',
    padding: 10,
    margin: 20,
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
    paddingLeft: 10,
    marginLeft: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#837d7d',
    padding: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor:'#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 5,
  },
  cardYear: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
  },
  cardIMDBID: {
  fontSize: 15,
  color: 'grey',
  fontWeight: 'bold',
  marginBottom: 10,
  },
  noResults: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:'#282a2b' ,
    borderWidth: 2,
    padding: 20,
    borderColor: 'red' ,
    borderRadius: 50,
  },

});

export default Home;
