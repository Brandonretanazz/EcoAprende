import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Green Title */}
        <Text style={styles.introTitle}>Bienvenido a EcoAprende</Text>

        {/* Introductory Section */}
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Bienvenido a EcoAprende, tu aliado en el camino hacia un planeta más verde y saludable. Nuestro objetivo es ayudarte a entender y adoptar prácticas sostenibles que no solo benefician al medio ambiente, sino que también mejoran tu calidad de vida.
          </Text>

          {/* GIF instead of Video */}
          <Image
            source={require('../assets/logo gif.gif')}  // Ruta al archivo GIF
            style={styles.introImage}                    // Estilos para el GIF
          />

          {/* Inspirational Phrase */}
          <Animatable.Text
            animation="pulse"
            easing="ease-in-out"
            iterationCount="infinite"
            style={styles.inspirationText}
          >
            "Pequeñas acciones, grandes cambios. ¡Comienza hoy!"
          </Animatable.Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAC2C3',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#056C6B',
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  introTitle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  introContainer: {
    marginTop: 20,
    padding: 15,
   backgroundColor: 'rgba(310, 310, 310, 0.25)',  // 25% de opacidad
    borderRadius: 15,
    flex: 1,
  },
  introText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 20,
  },
  introImage: {
    width: '100%',
    height: 240,
    marginTop: 10,
    borderRadius: 20,
      // Para que el GIF se ajuste sin distorsión
  },
  inspirationText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#4DBEA2',
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  iconContainer: {
    alignItems: 'center',
    paddingVertical: 5,
    
  },
  iconText: {
    fontSize: 13,
    color: 'white',
    marginTop: 4,
  },
});

export default HomeScreen;
