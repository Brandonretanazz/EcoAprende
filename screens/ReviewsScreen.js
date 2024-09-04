import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, PanResponder, Animated, Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa los íconos
import { useNavigation } from '@react-navigation/native'; // Importa la navegación

const ProgresoScreen = () => {
  const navigation = useNavigation(); // Hook para usar la navegación
  const [bestScore, setBestScore] = useState(0);
  const [circlePosition] = useState(new Animated.ValueXY({ x: 335, y: 430 }));

  useEffect(() => {
    loadBestScore();
  }, []);

  const loadBestScore = async () => {
    try {
      const storedBestScore = await AsyncStorage.getItem('BEST_SCORE');
      if (storedBestScore !== null) {
        setBestScore(parseInt(storedBestScore, 10));
      }
    } catch (error) {
      console.log('Error loading best score:', error);
    }
  };

  const openQuizLink = () => {
    Linking.openURL('https://docs.google.com/forms/d/1UZ4NutwEVylZJ7FhNYfOXZA0moPOHv8eKNjKtAaHix0/edit');
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [null, { dx: circlePosition.x, dy: circlePosition.y }],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      circlePosition.flattenOffset();
    },
    onPanResponderGrant: () => {
      circlePosition.setOffset({
        x: circlePosition.x._value,
        y: circlePosition.y._value,
      });
      circlePosition.setValue({ x: 0, y: 0 });
    },
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        {/* Texto de retroceso */}
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Text style={styles.headerText}>Mi progreso</Text>
        </TouchableOpacity>
      </View>

      {/* GIF */}
      <Image
        source={require('../assets/planta.gif')}
        style={styles.gif}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Resultados de Quizzes */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultados de tus Quiz</Text>
          <View style={styles.quizResult}>
            {/* Enlace al primer quiz */}
            <TouchableOpacity onPress={openQuizLink}>
              <View style={styles.quizRow}>
                <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
                <Text style={styles.quizText}>QUIZ 1°</Text>
              </View>
            </TouchableOpacity>

            {/* Otros quizzes */}
            {[2, 3, 4].map((quizNumber) => (
              <View key={quizNumber} style={styles.quizRow}>
                <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
                <Text style={styles.quizText}>QUIZ {quizNumber}°</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Puntuajes más altos */}
        <View style={styles.entertainmentContainer}>
          <Text style={styles.entertainmentTitle}>Entretenimiento</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.highScoresText}>Puntaje máximo del juego: {bestScore}</Text>
            <Image source={require('../assets/game.jpg')} style={styles.scoreImage} />
          </View>
        </View>
      </ScrollView>

      {/* Interactive Circle */}
      <Animated.View
        style={[styles.circle, circlePosition.getLayout()]}
        {...panResponder.panHandlers}
      >
        <Image source={require('../assets/recicla.jpg')} style={styles.circleImage} />
      </Animated.View>
    </View>
  );
};

export default ProgresoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  gif: {
    width: '80%',
    height: 240,
    alignSelf: 'center',
    marginBottom: 1,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: 'black',
  },
  backButton: {
    marginRight: 20, // Agrega espacio entre la flecha y el texto
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  resultContainer: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  quizResult: {
    flexDirection: 'column',
  },
  quizRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  quizIcon: {
    marginRight: 10,
  },
  quizText: {
    fontSize: 18,
    color: '#fff',
    flex: 1,
  },
  entertainmentContainer: {
    padding: 16,
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 80,
  },
  entertainmentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  highScoresText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
  },
  scoreImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#004D40',
  },
  circleImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});
