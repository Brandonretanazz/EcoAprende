import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MapasScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Puntos de reciclaje</Text>
      </View>

      {/* Map Image */}
      <View style={styles.mapContainer}>
        <Image source={require('../assets/mapa_el_salvador.png')} style={styles.mapImage} />
      </View>

      <ScrollView>
        {/* List of locations */}
        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => Linking.openURL('https://www.google.com/maps?q=Alas+Doradas,+Km+27+1/2+Carretera+a+Santa+Ana')}>
          <Image source={require('../assets/alas_doradas.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>ALAS DORADAS</Text>
            <Text style={styles.subtitle}>Km 27 1/2 Carretera a Santa Ana</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => Linking.openURL('https://maps.app.goo.gl/4uEdWy8FuAtut6Qb8')}>
          <Image source={require('../assets/Mobu_Logistic.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>MOBU LOGISTICS</Text>
            <Text style={styles.subtitle}>Parque Industrial San Andrés km 35 carretera a Santa Ana, Cd Arce</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => Linking.openURL('https://maps.app.goo.gl/hDhk1WB3KpgHBW7P6')}>
          <Image source={require('../assets/american_park.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>AMERICAN PARK</Text>
            <Text style={styles.subtitle}>American Industrial Park Free Zone, RH17+CP, Carr Panamericana, Cd Arce</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => Linking.openURL('https://maps.app.goo.gl/XJKR3cCMBCVgP5Hq6')}>
          <Image source={require('../assets/rene_toruno.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>RENE TORUÑO</Text>
            <Text style={styles.subtitle}>RH9R+FR2, San Andrés</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.locationContainer}
          onPress={() => Linking.openURL('https://maps.app.goo.gl/hgvyRZfiFaSoUbNu8')}>
          <Image source={require('../assets/las_margaritas.jpg')} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>LAS MARGARITAS ENTRE VIAS</Text>
            <Text style={styles.subtitle}>RH9J+6CP, Cd Arce</Text>
          </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAEA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#056C6B',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  mapContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  mapImage: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
  },
  locationContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
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

export default MapasScreen;
