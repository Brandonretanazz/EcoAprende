import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firestore } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Asegúrate de importar getAuth

const ProgresoScreen = () => {
  const navigation = useNavigation();
  const [quizScores, setQuizScores] = useState({ quiz1: 0, quiz2: 0, quiz3: 0 });

  useEffect(() => {
    loadQuizScores();
  }, []);

  const loadQuizScores = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const quiz1Ref = doc(firestore, 'users', user.uid, 'quizzes', 'quiz1');
        const quiz2Ref = doc(firestore, 'users', user.uid, 'quizzes', 'quiz2');
        const quiz3Ref = doc(firestore, 'users', user.uid, 'quizzes', 'quiz3');

        const quiz1Snap = await getDoc(quiz1Ref);
        const quiz2Snap = await getDoc(quiz2Ref);
        const quiz3Snap = await getDoc(quiz3Ref);

        setQuizScores({
          quiz1: quiz1Snap.exists() ? quiz1Snap.data().highestScore + 1 : 0, // Muestra puntaje +1
          quiz2: quiz2Snap.exists() ? quiz2Snap.data().highestScore + 1 : 0, // Muestra puntaje +1
          quiz3: quiz3Snap.exists() ? quiz3Snap.data().highestScore + 1 : 0, // Muestra puntaje +1
        });
      }
    } catch (error) {
      console.log('Error loading quiz scores:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/planta.gif')} style={styles.gif} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Resultados de tus Quiz</Text>

          <TouchableOpacity onPress={() => navigation.navigate('QuizReciclaje')}>
            <View style={styles.quizRow}>
              <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
              <Text style={styles.quizText}>QUIZ 1° Reciclaje - Mejor Puntuación: {quizScores.quiz1}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('QuizCambioClimatico')}>
            <View style={styles.quizRow}>
              <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
              <Text style={styles.quizText}>QUIZ 2° Cambio Climático - Mejor Puntuación: {quizScores.quiz2}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('QuizBiodiversidad')}>
            <View style={styles.quizRow}>
              <Icon name="leaf" size={24} color="#FFD700" style={styles.quizIcon} />
              <Text style={styles.quizText}>QUIZ 3° Biodiversidad - Mejor Puntuación: {quizScores.quiz3}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.entertainmentContainer}>
          <Text style={styles.entertainmentTitle}>Entretenimiento</Text>
          <View style={styles.scoreRow}>
            <Text style={styles.bestScore}>Mejor Puntuación: {quizScores.quiz1}</Text>
            <Image source={require('../assets/game.png')} style={styles.scoreImage} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={30} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={30} color="white" />
          <Text style={styles.iconText}>Contenido</Text>
        </TouchableOpacity>
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
    backgroundColor: '#F4F4F4',
  },
  header: {
    backgroundColor: '#28B463',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  gif: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    margin: 10,
  },
  scrollContainer: {
    padding: 16,
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 3,
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quizRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  quizIcon: {
    marginRight: 10,
  },
  quizText: {
    fontSize: 16,
  },
  entertainmentContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    elevation: 3,
  },
  entertainmentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bestScore: {
    fontSize: 16,
  },
  scoreImage: {
    width: 50,
    height: 50,
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#28B463',
    paddingVertical: 10,
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
