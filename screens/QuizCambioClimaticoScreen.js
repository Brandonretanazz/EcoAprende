import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth } from 'firebase/auth';
import { firestore } from '../services/firebaseConfig';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const QuizReciclajeScreen = ({ navigation }) => {
  const [score, setScore] = useState(0); // Puntuación del usuario
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Índice de la pregunta actual
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    { question: '¿Qué es el reciclaje?', answer: 'El proceso de convertir desechos en nuevos productos.' },
    { question: '¿Cuál es el símbolo del reciclaje?', answer: 'Las tres flechas en forma de triángulo.' },
    // Agrega las demás preguntas aquí
  ];

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Incrementa la puntuación
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setQuizCompleted(true);
      saveQuizScore();
    }
  };

  const saveQuizScore = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const quizRef = doc(firestore, 'users', user.uid, 'quizzes', 'quiz1');
      const currentData = await getDoc(quizRef);
      const currentScore = currentData.exists() ? currentData.data().highestScore : 0;

      if (score > currentScore) {
        await setDoc(quizRef, {
          highestScore: score,
          email: user.email,
          timestamp: new Date(),
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      {quizCompleted ? (
        <View>
          <Text style={styles.scoreText}>Has completado el quizz. Tu puntuación: {score}</Text>
          <Button title="Volver al progreso" onPress={() => navigation.navigate('Progreso')} />
        </View>
      ) : (
        <View>
          <Text style={styles.questionText}>{questions[currentQuestionIndex].question}</Text>
          <Button title="Respuesta Correcta" onPress={() => handleAnswer(true)} />
          <Button title="Respuesta Incorrecta" onPress={() => handleAnswer(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default QuizReciclajeScreen;
