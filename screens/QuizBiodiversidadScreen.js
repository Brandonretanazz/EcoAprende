import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Para navegar a ProgresoScreen

const QuizBiodiversidadScreen = () => {
  const navigation = useNavigation(); // Hook para navegar entre pantallas

  // Estado para controlar el progreso y la pregunta actual
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Qué se entiende por biodiversidad?",
      options: [
        "A) La variedad de especies en el planeta",
        "B) La diversidad de plantas en un bosque",
        "C) La variedad de vida a todos los niveles de organización biológica",
        "D) Solo incluye animales y plantas"
      ],
      correctOption: 2, // "C) La variedad de vida a todos los niveles de organización biológica"
    },
    {
      question: "¿Qué tipo de organismos están incluidos en la biodiversidad?",
      options: [
        "A) Solo plantas y animales",
        "B) Solo microorganismos",
        "C) Plantas, animales, hongos y microorganismos",
        "D) Solo especies en peligro de extinción"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué representa el torogoz en El Salvador?",
      options: [
        "A) Un ave migratoria",
        "B) El ave nacional de El Salvador, símbolo de la riqueza natural",
        "C) Un depredador en la selva",
        "D) Un símbolo de la ciudad capital"
      ],
      correctOption: 1,
    },
    {
      question: "¿Dónde habita el tigrillo en El Salvador?",
      options: [
        "A) En las playas",
        "B) En los bosques y montañas",
        "C) En las selvas tropicales",
        "D) En áreas urbanas"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué animal simboliza la agilidad y destreza en los bosques tropicales de El Salvador?",
      options: [
        "A) El torogoz",
        "B) El tigrillo",
        "C) El mono araña",
        "D) El jaguar"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué nivel de organización biológica incluye la biodiversidad?",
      options: [
        "A) Solo especies",
        "B) Ecosistemas y paisajes",
        "C) Solo genes",
        "D) Solo plantas"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué se considera parte de la variabilidad genética?",
      options: [
        "A) Las características de los ecosistemas",
        "B) Los procesos de adaptación de los animales",
        "C) La diversidad dentro de una misma especie",
        "D) Las diferencias entre especies de diferentes continentes"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué importancia tiene la biodiversidad para los ecosistemas?",
      options: [
        "A) Mantener la estabilidad de los ecosistemas y su resiliencia",
        "B) Reducir la cantidad de especies en peligro",
        "C) Aumentar la cantidad de depredadores",
        "D) Evitar que haya competencia entre especies"
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál es una amenaza directa a la biodiversidad en El Salvador?",
      options: [
        "A) Aumento de la biodiversidad",
        "B) Deforestación y pérdida de hábitats",
        "C) Aumento de las áreas protegidas",
        "D) Control de especies invasoras"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué caracteriza al mono araña en los bosques tropicales?",
      options: [
        "A) Su tamaño pequeño y sigiloso",
        "B) Su habilidad para balancearse ágilmente entre los árboles",
        "C) Su capacidad de cazar en grupos",
        "D) Su dependencia del agua"
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
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginBottom: 20,
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

export default QuizBiodiversidadScreen;