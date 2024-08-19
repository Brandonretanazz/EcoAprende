import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Inicio</Text>
      </View>

      {/* Green Title */}
      <Text style={styles.introTitle}>Bienvenido a EcoAprende</Text>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        {/* Introductory Section */}
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            En EcoAprende, creemos en la importancia de cuidar nuestro planeta. Aquí encontrarás información valiosa sobre cómo reciclar correctamente, reducir la contaminación, y adoptar prácticas sostenibles que contribuyan a un medio ambiente más limpio y saludable. ¡Únete a nosotros en este viaje hacia un futuro más verde!
          </Text>

          <Image
            source={require('../assets/image.jpg')}
            style={styles.introImage}
          />

          {/* Inspirational Phrase */}
          <Animatable.Text 
            animation="pulse"
            easing="ease-in-out" 
            iterationCount="infinite" 
            style={styles.inspirationText}
          >
            ¡Sé el cambio que quieres ver en el mundo! Empieza hoy, recicla y cuida el planeta.
          </Animatable.Text>
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
  introTitle: {
    fontSize: 22,
    color: '#00FF7F',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  content: {
    flex: 1,
  },
  introContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    height:580,
    flex: 1,  // Ajusta el contenedor gris para ocupar más espacio verticalmente
  },
  introText: {
    fontSize: 16,
    color: 'white',
    textAlign: "justify",
    marginBottom: 10,
  },
  introImage: {
    width: '100%',
    height: 200,
    marginTop:50,
    borderRadius: 10,
  },
  inspirationText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 90,
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