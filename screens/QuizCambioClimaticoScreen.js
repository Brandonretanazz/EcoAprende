import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const QuizCambioClimaticoScreen = () => {
  const navigation = useNavigation(); 

  // Estado para controlar el progreso y la pregunta actual
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Qué es el cambio climático?",
      options: [
        "A) Un aumento de las temperaturas en la Tierra",
        "B) Un cambio en los patrones de lluvia",
        "C) Cambios en el clima de la Tierra a largo plazo",
        "D) Todo lo anterior"
      ],
      correctOption: 3, // "D) Todo lo anterior"
    },
    {
      question: "¿Cuál de los siguientes gases es un gas de efecto invernadero?",
      options: [
        "A) Oxígeno",
        "B) Dióxido de carbono",
        "C) Helio",
        "D) Nitrógeno"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué actividad humana contribuye más al cambio climático?",
      options: [
        "A) La agricultura",
        "B) La deforestación",
        "C) La quema de combustibles fósiles",
        "D) La producción de plástico"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué efecto tiene el cambio climático en el nivel del mar?",
      options: [
        "A) Lo reduce",
        "B) Lo aumenta",
        "C) No tiene efecto",
        "D) Lo estabiliza"
      ],
      correctOption: 1,
    },
    {
      question: "¿Cuál es una consecuencia del cambio climático?",
      options: [
        "A) Mayor biodiversidad",
        "B) Aumento de fenómenos meteorológicos extremos",
        "C) Reducción de enfermedades",
        "D) Mejora de la calidad del aire"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué es el calentamiento global?",
      options: [
        "A) Un término sin relación con el cambio climático",
        "B) Aumento gradual de las temperaturas de la atmósfera terrestre",
        "C) Reducción de la capa de ozono",
        "D) Un cambio estacional"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué acción puede ayudar a mitigar el cambio climático?",
      options: [
        "A) Reducir el uso de plásticos",
        "B) Aumentar la deforestación",
        "C) Usar más combustibles fósiles",
        "D) Desperdiciar más comida"
      ],
      correctOption: 0,
    },
    {
      question: "¿Qué es la huella de carbono?",
      options: [
        "A) Un impacto visual de la contaminación",
        "B) La cantidad total de emisiones de gases de efecto invernadero",
        "C) Un tipo de planta",
        "D) Un proceso de reciclaje"
      ],
      correctOption: 1,
    },
    {
      question: "¿Cuál es un objetivo del Acuerdo de París?",
      options: [
        "A) Promover el uso del petróleo",
        "B) Limitar el calentamiento global a menos de 2 °C",
        "C) Aumentar las emisiones de CO2",
        "D) Desarrollar nuevas fuentes de energía fósil"
      ],
      correctOption: 1,
    },
  ];

  // Función para manejar siguiente pregunta
  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      if (selectedOption === questions[currentQuestionIndex].correctOption) {
        setScore(score + 1); // Incrementa la puntuación si la opción es correcta
      }
      
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOption(null); // Reinicia la selección
      } else {
        setShowScore(true); // Muestra el resultado final
      }
    }
  };


  if (showScore) {
    // Mostrar la pantalla de puntuación cuando el quiz termine
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>¡Has completado el quiz!</Text>
        <Text style={styles.scoreText}>Tu puntuación: {score} / 10</Text>

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Progreso')}>
          <Text style={styles.nextButtonText}>Regresar a Progreso</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionNumber}>{currentQuestionIndex + 1}/10</Text>
      <Text style={styles.questionText}>
        {questions[currentQuestionIndex].question}
      </Text>

      {questions[currentQuestionIndex].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === index && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={handleNextQuestion}
      >
        <Text style={styles.nextButtonText}>Siguiente pregunta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 12,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#76c7c0',
  },
  optionText: {
    fontSize: 16,
  },
  nextButton: {
    padding: 12,
    backgroundColor: '#2d6a4f',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default QuizCambioClimaticoScreen;