import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

const species = [
  {
    id: '1',
    name: 'Torogoz',
    habitat: 'Bosques de El Salvador',
    image: require('../assets/torogoz.jpg'),
    description: 'El torogoz, también conocido como Momoto, es el ave nacional de El Salvador, reconocible por su plumaje vibrante y su distintiva cola en forma de raqueta. Este pequeño pero majestuoso pájaro es un emblema de la naturaleza salvadoreña, destacando por su belleza y elegancia. Su vuelo ágil y colorido decora los bosques del país, simbolizando la libertad y la riqueza natural de la región.',
    images: [
      require('../assets/torogoz1.jpg'),
      require('../assets/torogoz2.jpg'),
      require('../assets/torogoz3.jpeg'),
      require('../assets/torogoz4.jpg'),
    ],
  },
  {
    id: '2',
    name: 'Tigrillo',
    habitat: 'Bosques y Montañas de El Salvador',
    image: require('../assets/bald_eagle.png'),
    description: 'El tigrillo, también conocido como leopardo tigre, es un felino pequeño y escurridizo que habita los bosques y montañas de El Salvador. Este enigmático depredador se caracteriza por su pelaje manchado y su agilidad, lo que le permite moverse con sigilo entre la densa vegetación. Aunque no es fácil de avistar, el tigrillo es un símbolo de la naturaleza salvadoreña, representando la fuerza y la resiliencia de los ecosistemas del país.',
    images: [
      require('../assets/eagle1.png'),
      require('../assets/eagle2.png'),
      require('../assets/eagle3.png'),
      require('../assets/jaguar3.png'),
    ],
  },
  {
    id: '3',
    name: 'Mono Araña',
    habitat: 'Bosques tropicales de El Salvador',
    image: require('../assets/red_frog.png'),
    description: 'El mono araña, con sus largos brazos y agilidad inigualable, es un habitante icónico de los bosques tropicales de El Salvador. Este primate, conocido por su destreza en los árboles, se desplaza con gracia entre las copas, balanceándose con facilidad y rapidez. Su habilidad para moverse como si fuera parte del propio bosque lo convierte en un símbolo de la vida salvaje salvadoreña.',
    images: [
      require('../assets/frog1.png'),
      require('../assets/frog2.png'),
      require('../assets/frog3.png'),
      require('../assets/jaguar3.png'),
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
      
      {/* Vista en cuadrícula para las imágenes adicionales */}
      <View style={styles.imagesGrid}>
        {item.images.map((image, index) => (
          <Image key={index} source={image} style={styles.gridImage} />
        ))}
      </View>
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
      backgroundColor: '#CCCCCC',
      paddingTop: 40,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#056C6B',
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
      color: '#056C6B',
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
    imagesGrid: {
      flexDirection: 'row',        // Distribuye las imágenes en filas
      flexWrap: 'wrap',            // Permite que las imágenes envuelvan a la siguiente fila
      justifyContent: 'center',    // Centra las imágenes en la vista
    },
    gridImage: {
      width: (width - 200) / 2,    // Ancho de la imagen para tener 2 por fila
      height: 150,                 // Ajusta la altura de las imágenes
      margin: 5,                   // Espacio entre las imágenes
      borderRadius: 10,
      resizeMode: 'cover',         // Recorta la imagen si es necesario pero mantiene el aspecto
     
    },
  });
  