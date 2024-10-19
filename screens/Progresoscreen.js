import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, PanResponder, Animated, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const ProgresoScreen = () => {
  const navigation = useNavigation();
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    loadBestScore();
  }, []);

  const loadBestScore = async () => {
    try {
      const docRef = doc(firestore, 'gameData', 'bestScore');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBestScore(docSnap.data().score);
      }
    } catch (error) {
      console.log('Error loading best score:', error);
    }
  };




  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* GIF */}
      <Image source={require('../assets/planta.gif')} style={styles.gif} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Resultados de Quizzes */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultados de tus Quiz</Text>
          <View style={styles.quizResult}>
          <TouchableOpacity onPress={() => navigation.navigate('QuizReciclajeScreen')}>
              <View style={styles.quizRow}>
                <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
                <Text style={styles.quizText}>QUIZ 1° Reciclaje</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuizCambioClimaticoScreen')}>
            <View style={styles.quizRow}>
              <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
              <Text style={styles.quizText}>QUIZ 2° Cambio Climático</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuizBiodiversidadScreen')}>
            <View style={styles.quizRow}>
              <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
              <Text style={styles.quizText}>QUIZ 3° Biodiversidad</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Puntuajes más altos */}
        <View style={styles.entertainmentContainer}>
          <Text style={styles.entertainmentTitle}>Entretenimiento</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.bestScore}>Mejor Puntuación: {bestScore}</Text>
            <Image source={require('../assets/game.png')} style={styles.scoreImage} />
          </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('MapasScreen')} style={styles.iconContainer}>
          <Ionicons name="navigate-circle-outline" size={30} color="white" />
          <Text style={styles.iconText}>ReciclaMaps</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Progreso')} style={styles.iconContainer}>
          <Icon name="star" size={30} color="white" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Icon name="user" size={30} color="white" />
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
    backgroundColor: '#056C6B',
  },
  backButton: {
    marginRight: 20,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 50,
  },
  resultContainer: {
    backgroundColor: 'gray',
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
    backgroundColor: 'gray',
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
  bestScore: {
    fontSize: 16,
    color: '#fff',
    marginRight: 10,
  },
  scoreImage: {
    width: 90,
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
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
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

export default ProgresoScreen;
