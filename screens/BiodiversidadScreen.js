import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReciclajeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Biodiversidad</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Aquí colocamos la imagen junto con el contenido dentro del ScrollView */}
      <ScrollView style={styles.content}>
        
      <Image
          source={require('../assets/bio.webp')} // Cambiar el path de acuerdo a donde se encuentre la imagen en tu proyecto
          style={styles.mainImage}
        />

        <Text style={styles.text}>
        La biodiversidad o diversidad biológica es la variedad de la vida. Este reciente concepto incluye varios niveles de la organización biológica. Abarca a la diversidad de especies de plantas, animales, hongos y microorganismos que viven en un espacio determinado, a su variabilidad genética, a los ecosistemas de los cuales forman parte estas especies y a los paisajes o regiones en donde se ubican los ecosistemas. También incluye los procesos ecológicos y evolutivos que se dan a nivel de genes, especies, ecosistemas y paisajes.
    </Text>
       

        <Text style={styles.subtitle}>Galeria.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Bio')}>
          <Image
            source={require('../assets/galery.png')} // Cambia el path según sea necesario
            style={styles.mainImage2}
          />
        </TouchableOpacity>
  {/* Imagen dentro del ScrollView */}

      
      
 


<Text style={styles.text}>
</Text>


<TouchableOpacity style={styles.quizButton} onPress={() => navigation.navigate('QuizScreen')}>
          <Text style={styles.quizButtonText}>Iniciar Quizz</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={30} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={30} color="white" />
          <Text style={styles.iconText}>Contenido</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={styles.iconContainer}>
          <Ionicons name="game-controller-outline" size={30} color="white" />
          <Text style={styles.iconText}>Jugar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Progreso')} style={styles.iconContainer}>
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
    backgroundColor: '#CCCCCC',
  },
  header: {
    backgroundColor: '#056C6B',
    paddingVertical: 22,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  mainImage: {
    width: '80%',       // Aumentar el ancho de la imagen
    height: 350,        // Mantener la altura
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center', // Centrar la imagen horizontalmente
  },

  mainImage2: {
    width: '80%',       // Aumentar el ancho de la imagen
    height: 200,        // Mantener la altura
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center', // Centrar la imagen horizontalmente
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    textAlign:"center",
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginBottom: 15,
    textAlign: "justify",
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
  },
  iconText: {
    color: 'white',
    fontSize: 12,
  },
  quizButton: {
    backgroundColor: '#056C6B',   // Color del botón
    paddingVertical: 8,           // Reducir el padding vertical para que sea más corto en altura
    paddingHorizontal: 10,        // Ajustar el padding horizontal para hacerlo más angosto
    borderRadius: 8,              // Bordes redondeados
    alignItems: 'center',
    alignSelf: 'center',          // Centrar el botón horizontalmente
    marginVertical: 30,           // Espacio vertical
    width: '40%',                 // Ajustar el ancho del botón (puedes ajustarlo según lo que prefieras)
  },
  quizButtonText: {
    color: 'white',
    fontSize: 14,             
    fontWeight: 'bold',
  },

});

export default ReciclajeScreen;
