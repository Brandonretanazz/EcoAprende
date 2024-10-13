import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>contenido</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
       
        <View style={styles.videoList}>
          <VideoItem 
            imageSource={require('../assets/recipiente_contenido.jpg')}
            title="¿Que es el reciclaje?"
            onPress={() => navigation.navigate('Reciclaje')}
          />
          <VideoItem 
            title="¿Qué es el Cambio Climático?" 
            imageSource={require('../assets/climate_cambio.jpeg')}
            onPress={() => navigation.navigate('Cambio Climático')}
          />
          <VideoItem 
            title="Biodiversidad"
            imageSource={require('../assets/biodiversity.jpg')}
            onPress={() => navigation.navigate('Biodiversidad')}
          />
            <VideoItem 
            title="Videos"
            imageSource={require('../assets/video.png')}
            onPress={() => navigation.navigate('VideosScreen')}
          />
        </View>
      </ScrollView>

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={28} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={28} color="white" />
          <Text style={styles.iconText}>Contenido</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={styles.iconContainer}>
          <Icon name="game-controller-outline" size={28} color="white" />
          <Text style={styles.iconText}>Jugar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Progreso')} style={styles.iconContainer}>
          <Icon name="star" size={28} color="white" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Icon name="person" size={28} color="white" />
          <Text style={styles.iconText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VideoItem = ({ title, imageSource, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.videoItem}>
    <View style={styles.videoTextContainer}>
      <Text style={styles.videoTitle}>{title}</Text>
    </View>
    <Image source={imageSource} style={styles.videoImage} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAC2C3',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
   backgroundColor:"#056C6B",
    alignItems: 'left',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  videoList: {
    marginTop: 0,
  },
  videoItem: {
    marginBottom: 15,
    borderRadius: 10,
 
  },
  videoImage: {
    width: '100%',
    height: 280,
    borderRadius: 10,

  },
  videoTextContainer: {
    padding: 15,
  },
  videoTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#4DBEA2',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    marginTop: 4,
  },
});

export default HomeScreen;