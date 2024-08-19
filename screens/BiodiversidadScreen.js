import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

const species = [
  {
    id: '1',
    name: 'Jaguar',
    habitat: 'Selvas Tropicales',
    image: require('../assets/jaguar.png'),
    description: 'El jaguar es el felino más grande de América y es conocido por su fuerza y habilidad para nadar.',
    images: [
      require('../assets/jaguar1.png'),
      require('../assets/jaguar2.png'),
      require('../assets/jaguar3.png'),
    ],
  },
  {
    id: '2',
    name: 'Águila Calva',
    habitat: 'Bosques y Montañas',
    image: require('../assets/bald_eagle.png'),
    description: 'El águila calva es un símbolo de los Estados Unidos y es conocida por su impresionante vista.',
    images: [
      require('../assets/eagle1.png'),
      require('../assets/eagle2.png'),
      require('../assets/eagle3.png'),
    ],
  },
  {
    id: '3',
    name: 'Rana Roja',
    habitat: 'Bosques Lluviosos',
    image: require('../assets/red_frog.png'),
    description: 'Las ranas rojas son pequeñas y coloridas, y su color brillante advierte a los depredadores de su toxicidad.',
    images: [
      require('../assets/frog1.png'),
      require('../assets/frog2.png'),
      require('../assets/frog3.png'),
    ],
  },
  // Añade más especies aquí
];

const { width } = Dimensions.get('window');

const BiodiversidadScreen = () => {
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.cardContainer}>
      <Image source={item.image} style={styles.mainImage} />
      <Text style={styles.speciesName}>{item.name}</Text>
      <Text style={styles.habitat}>{item.habitat}</Text>
      <Text style={styles.description}>{item.description}</Text>
      
      {/* FlatList para las imágenes adicionales */}
      <FlatList
        data={item.images}
        renderItem={({ item: image }) => (
          <Image source={image} style={styles.additionalImage} />
        )}
        keyExtractor={(image, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.additionalImagesList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biodiversidad</Text>
      
      <FlatList
        ref={flatListRef}
        data={species}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BiodiversidadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 20,
  },
  cardContainer: {
    width: width - 60, // Ajusta para padding horizontal
    alignItems: 'center',
    marginHorizontal: 10,
  },
  mainImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  speciesName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 10,
  },
  habitat: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  additionalImagesList: {
    marginTop: 10,
  },
  additionalImage: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 8,
  },
});
