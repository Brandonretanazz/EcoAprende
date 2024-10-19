import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CambioClimaticoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Cambio Climático</Text>
        
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/climate_image.png')}
          style={styles.mainImage}
        />
        <Text style={styles.mainTitle}>
          El Impacto del Cambio Climático en el Planeta
        </Text>
        <Text style={styles.mainText}>
        El cambio climático se refiere a los cambios significativos y duraderos en los patrones meteorológicos globales. Estos cambios pueden ser causados por procesos naturales, como las variaciones en la radiación solar, o por actividades humanas, como la quema de combustible fósiles. Sus efectos incluyen el derretimiento de los glaciares, la elevación del nivel del mar y los cambios externos en los patrones climáticos.         </Text>

        {/* List of Effects */}
        <Text style={styles.subTitle}>Somos responsables del calentamiento global</Text>
        <Text style={styles.mainText}>
        Los científicos dedicados a las cuestiones climáticas han demostrado que las personas somos responsables del calentamiento global de los últimos 200 años.  Las actividades humanas, tales como las mencionadas arriba, generan gases de efecto invernadero que elevan la temperatura del planeta al ritmo más rápido de los 2000 años pasados.{"\n"}{"\n"}

La temperatura media de la Tierra es ahora 1,1 °C más elevada que a finales del siglo XIX, antes de la revolución industrial, y más elevada en términos absolutos que en los últimos 100 000 años. La última década (2011-2020) fue la más cálida registrada. En esa línea, cada una de las cuatro décadas útlimas ha sido más caliente que cualquier otra década desde 1850. {"\n"}{"\n"}

Mucha gente piensa que el cambio climático significa principalmente temperaturas más cálidas. Pero el aumento de la temperatura es sólo el principio de la historia. Como la Tierra es un sistema, en el que todo está conectado, los cambios de una zona pueden influir en los cambios de todas las demás.
Las consecuencias del cambio climático incluyen ahora, entre otras, sequías intensas, escasez de agua, incendios graves, aumento del nivel del mar, inundaciones, deshielo de los polos, tormentas catastróficas y disminución de la biodiversidad.
        </Text>

        <TouchableOpacity style={styles.quizButton} onPress={() => navigation.navigate('QuizScreen')}>
          <Text style={styles.quizButtonText}>Iniciar Quizz</Text>
        </TouchableOpacity>

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

const EffectItem = ({ title, imageSource }) => (
  <View style={styles.effectItem}>
    <Image source={imageSource} style={styles.effectImage} />
    <Text style={styles.effectTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor:"#056C6B",
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
  mainTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign:"justify",
  },
  subTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  effectList: {
    marginTop: 10,
  },
  effectItem: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  effectImage: {
    width: 120,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  effectTitle: {
    fontSize: 16,
    color: '#fff',
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

export default CambioClimaticoScreen;
