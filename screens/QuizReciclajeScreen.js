import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const QuizReciclajeScreen = () => {
  const navigation = useNavigation(); 

  // Estado para controlar el progreso y la pregunta actual
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "¿Qué es el reciclaje primario o de circuito cerrado?",
      options: [
        "A) Transformar un producto en algo diferente",
        "B) Convertir materiales en más de lo mismo, como papel en más papel",
        "C) Degradar los productos con procesos químicos",
        "D) Transformar residuos orgánicos en energía"
      ],
      correctOption: 1, // "B) Convertir materiales en más de lo mismo, como papel en más papel"
    },
    {
      question: "¿Qué es el reciclaje secundario?",
      options: [
        "A) Convertir materiales en productos completamente nuevos",
        "B) Transformar un producto desechado en otro objeto fabricado con el mismo material",
        "C) Separar los residuos por biodegradabilidad",
        "D) Producir energía a partir de residuos"
      ],
      correctOption: 1,
    },
    {
      question: "¿Qué tipo de reciclaje implica la descomposición química de materiales?",
      options: [
        "A) Reciclaje primario",
        "B) Reciclaje secundario",
        "C) Reciclaje terciario o químico",
        "D) Reciclaje orgánico"
      ],
      correctOption: 2,
    },
    {
      question: "¿Cuál es una de las principales ventajas del reciclaje según Global Recycling Foundation?",
      options: [
        "A) Aumenta el uso de materias primas",
        "B) Contribuye a la sobreexplotación de recursos",
        "C) Reduce la energía necesaria para fabricar productos",
        "D) Mejora la calidad del aire en las ciudades"
      ],
      correctOption: 2,
    },
    {
      question: "¿Cómo se clasifican los residuos según su biodegradabilidad?",
      options: [
        "A) Envases y vidrios",
        "B) Orgánicos e inorgánicos",
        "C) Vidrio y papel",
        "D) Materiales reciclables y no reciclables"
      ],
      correctOption: 1,
    },
    {
      question: "¿En qué contenedor deben depositarse los envases como latas y briks?",
      options: [
        "A) Contenedor azul",
        "B) Contenedor verde",
        "C) Contenedor amarillo",
        "D) Contenedor gris"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué tipo de residuos se deben depositar en el contenedor azul?",
      options: [
        "A) Botellas de vidrio",
        "B) Latas de refresco",
        "C) Papel y cartón",
        "D) Residuos orgánicos"
      ],
      correctOption: 2,
    },
    {
      question: "¿Qué se debe depositar en el contenedor verde?",
      options: [
        "A) Botellas de vidrio",
        "B) Residuos plásticos",
        "C) Papel y cartón",
        "D) Desechos electrónicos"
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál es la importancia del reciclaje químico?",
      options: [
        "A) Permite descomponer los materiales para producir sustancias muy diferentes",
        "B) Aumenta la cantidad de residuos",
        "C) Solo se aplica a productos orgánicos",
        "D) Es más costoso que otros tipos de reciclaje"
      ],
      correctOption: 0,
    },
    {
      question: "¿Cuál es un reto del reciclaje en los próximos años?",
      options: [
        "A) Mejorar la producción de plástico",
        "B) Reducir el consumo de papel",
        "C) Desarrollar nuevas formas de procesar residuos de manera eficiente",
        "D) Aumentar el consumo de materias primas"
      ],
      correctOption: 2,
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

  // Función para regresar a la pantalla ProgresoScreen
  const handleGoToProgresoScreen = () => {
    navigation.navigate('ProgresoScreen'); // Navegar a la pantalla de progreso
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

export default QuizReciclajeScreen;