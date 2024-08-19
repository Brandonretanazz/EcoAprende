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
          El cambio climático se refiere a los cambios significativos y duraderos en los patrones meteorológicos globales. Estos cambios pueden ser causados por procesos naturales, como las variaciones en la radiación solar, o por actividades humanas, como la quema de combustibles fósiles. Sus efectos incluyen el derretimiento de los glaciares, la elevación del nivel del mar y cambios extremos en los patrones climáticos.
        </Text>

        {/* List of Effects */}
        <Text style={styles.subTitle}>Efectos del Cambio Climático</Text>
        <View style={styles.effectList}>
          <EffectItem 
            title="Aumento del Nivel del Mar" 
            imageSource={require('../assets/sea_level_rise.jpg')}
          />
          <EffectItem 
            title="Eventos Meteorológicos Extremos" 
            imageSource={require('../assets/extreme_weather.jpg')}
          />
          <EffectItem 
            title="Pérdida de Biodiversidad" 
            imageSource={require('../assets/biodiversity_loss.jpg')}
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

const EffectItem = ({ title, imageSource }) => (
  <View style={styles.effectItem}>
    <Image source={imageSource} style={styles.effectImage} />
    <Text style={styles.effectTitle}>{title}</Text>
  </View>
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
  mainTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    color: '#fff',
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

export default CambioClimaticoScreen;
