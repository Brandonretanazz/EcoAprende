import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importación correcta de MaterialIcons
import Ionicons from 'react-native-vector-icons/Ionicons'; // Agrega esta línea para importar Ionicons correctamente

const ReciclajeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reciclaje</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Recicla')}>
          <Icon name="arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Image
          source={require('../assets/contenedores.png')} // Reemplaza con la imagen de los contenedores
          style={styles.mainImage}
        />

        <Text style={styles.title}>¿Qué es el reciclaje y por qué es importante reciclar?</Text>
        <Text style={styles.text}>
        El reciclaje es la recolección y el procesamiento de desechos como el papel y cartón, vidrio o plástico. Este supone crear nuevos productos basados en esos mismos materiales. Una nueva oportunidad para la Tierra, a la que se puede proteger si se entienden los beneficios del reciclaje, la manera correcta de separar los residuos y los retos a los que se enfrenta esta actividad en los próximos años.        </Text>

        <Text style={styles.subtitle}>¿Qué tipos de reciclaje existen?</Text>
        <Text style={styles.text}>
        Existen tres tipos principales. El reciclaje primario, o de circuito cerrado, convierte los materiales en más de lo mismo, como papel en más papel o las latas de refresco en más latas de refresco. El secundario transforma un producto desechado en otros objetos, aunque fabricados con el mismo material.        </Text>

        <Text style={styles.text}>
        Y el terciario o químico descompone químicamente los materiales para producir con ellos algo muy diferente.
        </Text>

        {/* Aquí alineamos la imagen y el texto en la misma fila */}
        <View style={styles.row}>
          <Image
            source={require('../assets/quimico.png')} // Reemplaza con la imagen del símbolo verde
            style={styles.iconImage}
          />

          <Text style={styles.textRight}>
          En el contexto de la química y el reciclaje, el terciario o químico se refiere a un tipo de proceso en el que los materiales reciclables se someten a una descomposición química para transformarlos en nuevas sustancias o productos. Este proceso es fundamental para producir materiales que sean significativamente diferentes de los originales, lo que permite su reutilización en una amplia variedad de aplicaciones.
          </Text>
        </View>
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

        {/* Icono de Juego */}
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
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#333',
    marginBottom: 30,
    textAlign:"justify",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 20, 
  },
  textRight: {
    flex: 1,
    fontSize: 14,
    lineHeight: 22.5,
    color: '#333',
    textAlign:"justify"
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
});

export default ReciclajeScreen;
