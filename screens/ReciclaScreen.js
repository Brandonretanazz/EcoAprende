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
        <Text style={styles.headerText}></Text>
        <TouchableOpacity onPress={() => navigation.navigate('Reciclaje')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Aquí colocamos la imagen junto con el contenido dentro del ScrollView */}
      <ScrollView style={styles.content}>
        
      

        <Text style={styles.title}>La importancia de reciclar</Text>
        <Text style={styles.text}>
        Global Recycling Foundation señala múltiples ventajas, aunque pueden resumirse en que conserva los recursos naturales y reduce la sobreexplotación de materias primas protegiendo así los hábitats. 
        Contribuye además a economizar energía ya que los productos reciclados prescinden de varios pasos imprescindibles en el proceso de fabricación. Es decir, se necesita mucha más energía para extraer, refinar, transportar y procesar materias primas que para transformar materiales reciclados ya disponibles.        </Text>
       

        <Text style={styles.subtitle}>Clasificación de residuos...</Text>
        <Text style={styles.text}>
          Existen tres tipos de clasificaciones para los residuos:
        </Text>
        <Text style={styles.text}>
          1. Según su composición (envases, papel y cartón, vidrio, etc.).
        </Text>
        <Text style={styles.text}>
          2. Según su biodegradabilidad (orgánicos e inorgánicos).
        </Text>
        <Text style={styles.text}>
          3. Según su origen (domiciliarios, industriales, hospitalarios, de construcción).
        </Text>
  {/* Imagen dentro del ScrollView */}
  <Image
          source={require('../assets/info.png')} // Cambiar el path de acuerdo a donde se encuentre la imagen en tu proyecto
          style={styles.mainImage}
        />
        <Text style={styles.title}>Clasificación de residuos: según su
        biodegradabilidad</Text>
        <Text style={styles.text}>
        Esta clasificación es la base del reciclaje. Los residuos se agrupan según su composición, se depositan en los distintos contenedores y luego se procesan en conjunto.
        </Text>

        <Text style={styles.text}>
  • Papel y cartón: este tipo de residuos se deposita en el contenedor azul. Incluye algunos objetos como periódicos, revistas, carpetas o cajas de cartón.
</Text>
<Text style={styles.text}>
  • Envases: estos residuos se depositan en el contenedor amarillo. Latas, briks o botellas de plástico son algunos ejemplos de residuos que deben tirarse a este contenedor.
</Text>
<Text style={styles.text}>
  • Vidrios: incluyen botellas, bombillas u otros objetos. Se depositan en el contenedor verde y no debe confundirse con el cristal.
</Text>
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
    height: 800,        // Mantener la altura
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
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
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
