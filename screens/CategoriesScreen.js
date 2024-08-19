import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Categorías</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/imgprincipal.webp')}
          style={styles.mainImage}
        />

        <View style={styles.videoList}>
          <VideoItem 
            title="¿Qué es el medio ambiente?" 
            imageSource={require('../assets/biodiversity_image.png')}
            onPress={() => navigation.navigate('Cambio Climático')}
          />
          <VideoItem 
            imageSource={require('../assets/biodiversity_image.png')}
            title="Cómo el reciclaje ayuda al medio ambiente"
            onPress={() => navigation.navigate('Reciclaje')}
          />
          <VideoItem 
            title="Importancia de la biodiversidad"
            imageSource={require('../assets/biodiversity_image.png')}
            onPress={() => navigation.navigate('Biodiversidad')}
          />
        </View>
      </ScrollView>

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={30} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={30} color="white" />
          <Text style={styles.iconText}>Categorías</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reviews')} style={styles.iconContainer}>
          <Icon name="star" size={30} color="white" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Icon name="person" size={30} color="white" />
          <Text style={styles.iconText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const VideoItem = ({ title, imageSource, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.videoItem}>
    <Image source={imageSource} style={styles.videoImage} />
    <View style={styles.videoTextContainer}>
      <Text style={styles.videoTitle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
    marginTop: 20,
    width: 200,
  },
  videoItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  videoImage: {
    width: 120, // Ajusta el ancho
    height: 67.5, // Ajusta la altura manteniendo la relación de aspecto 16:9 (que es lo mismo que 160:90)
    borderRadius: 10,
    marginRight: 10,
    resizeMode: 'contain', // Asegura que la imagen se ajuste sin recortarse
    marginTop: 35,
  },
  
  videoTextContainer: {
    justifyContent: 'center',
  },
  videoTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#222',
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