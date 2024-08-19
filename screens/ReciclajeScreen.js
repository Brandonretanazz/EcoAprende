import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const items = [
  {
    id: 1,
    name: 'Periódico',
    type: 'papel',
    image: require('../assets/paper.png'),
  },
  {
    id: 2,
    name: 'Botella de Plástico',
    type: 'plástico',
    image: require('../assets/plastic.png'),
  },
  {
    id: 3,
    name: 'Botella de Vidrio',
    type: 'vidrio',
    image: require('../assets/glass.png'),
  },
  {
    id: 4,
    name: 'Bolsa de Plástico',
    type: 'plástico',
    image: require('../assets/plastic_bag.png'),
  },
  {
    id: 5,
    name: 'Caja de Cartón',
    type: 'papel',
    image: require('../assets/cardboard.png'),
  },
  {
    id: 6,
    name: 'Botella de Vidrio Verde',
    type: 'vidrio',
    image: require('../assets/green_glass_bottle.png'),
  },
  {
    id: 7,
    name: 'Revista',
    type: 'papel',
    image: require('../assets/magazine.png'),
  },
  {
    id: 8,
    name: 'Taza de Vidrio',
    type: 'vidrio',
    image: require('../assets/glass_cup.png'),
  },
  {
    id: 9,
    name: 'Envase de Yogur',
    type: 'plástico',
    image: require('../assets/yogurt_container.png'),
  },
];

const bins = [
  {
    id: 'papel',
    name: 'Papel',
    image: require('../assets/paper_bin.png'),
  },
  {
    id: 'plástico',
    name: 'Plástico',
    image: require('../assets/plastic_bin.png'),
  },
  {
    id: 'vidrio',
    name: 'Vidrio',
    image: require('../assets/glass_bin.png'),
  },
];

const ReciclajeGameScreen = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    loadBestScore();
  }, []);

  useEffect(() => {
    let timer;
    if (isGameStarted && !isGamePaused && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      endGame();
    }
    return () => clearInterval(timer);
  }, [isGameStarted, isGamePaused, timeLeft]);

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

  const saveBestScore = async (newBestScore) => {
    try {
      await AsyncStorage.setItem('BEST_SCORE', newBestScore.toString());
    } catch (error) {
      console.log('Error saving best score:', error);
    }
  };

  const startGame = () => {
    setIsGameStarted(true);
    setShowInfo(false);
    setScore(0);
    setTimeLeft(30);
    generateNewItem();
  };

  const pauseGame = () => {
    setIsGamePaused(true);
  };

  const resumeGame = () => {
    setIsGamePaused(false);
  };

  const showInfoAgain = () => {
    setIsGamePaused(true);
    setShowInfo(true);
  };

  const generateNewItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
  };

  const handleChoice = (binType) => {
    if (isGamePaused) {
      return; // No permitir aumentar el puntaje si el juego está pausado
    }

    if (currentItem.type === binType) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        saveBestScore(newScore);
      }
      generateNewItem();
    } else {
      endGame();
    }
  };

  const endGame = () => {
    Alert.alert('¡Fin del Juego!', `Tu puntuación es: ${score}`, [
      { text: 'Reiniciar', onPress: resetGame },
    ]);
    setIsGameStarted(false);
    setIsGamePaused(false);
    setShowInfo(true);
  };

  const resetGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameStarted(false);
    setShowInfo(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Reciclaje</Text>
      <Text style={styles.score}>Puntuación: {score}</Text>
      <Text style={styles.bestScore}>Mejor Puntuación: {bestScore}</Text>

      {!isGameStarted ? (
        <>
          <TouchableOpacity onPress={startGame} style={styles.startButton}>
            <Text style={styles.startButtonText}>Comenzar</Text>
          </TouchableOpacity>

          {showInfo && (
            <ScrollView style={styles.infoContainer}>
              <Text style={styles.infoTitle}>¿Qué es el reciclaje y por qué es importante reciclar?</Text>
              <Text style={styles.infoText}>
              El reciclaje es la recolección y el procesamiento de desechos como el papel y cartón,
               vidrio o plástico. Este supone crear nuevos productos basados en esos mismos materiales.
                Una nueva oportunidad para la Tierra, a la que se puede proteger si se entienden los beneficios
                 del reciclaje, la manera correcta de separar los residuos y los retos a los que se enfrenta esta
                  actividad en los próximos años.
              </Text>
              <Text style={styles.infoTitle}>¿Qué es el reciclaje?</Text>
              <Text style={styles.infoText}>
              El reciclaje es el proceso de recolección y transformación de materiales para convertirlos en nuevos
               productos. Estos desechos, de otro modo, serían descartados como basura.
              </Text>
              <Image
          source={require('../assets/infografia.jpeg')}
          style={styles.mainImage}
        />
         <Text style={styles.infoText}>Communications. (2024, 2 agosto). ¿Qué es el reciclaje y por qué es importante reciclar? BBVA NOTICIAS. </Text>
              <Text style={styles.infoTitle}>¿Qué tipos de reciclaje existen?</Text>
              <Text style={styles.infoText}>
              Existen tres tipos principales. El reciclaje primario, o de circuito cerrado, convierte 
              los materiales en más de lo mismo, como papel en más papel o las latas de refresco en más
               latas de refresco. El secundario transforma un producto desechado en otros objetos aunque
                fabricados con el mismo material. Y el terciario o químico descompone químicamente los 
                materiales para producir con ellos algo muy diferente.
              </Text>
              <Text style={styles.infoTitle}>¿Por qué es importante reciclar?</Text>
              <Text style={styles.infoText}>
              Global Recycling Foundation señala múltiples ventajas, aunque pueden resumirse 
              en que conserva los recursos naturales y reduce la sobreexplotación de materias
               primas protegiendo así los hábitats. Contribuye además a economizar energía ya 
               que los productos reciclados prescinden de varios pasos imprescindibles en el proceso 
               de fabricación. Es decir, se necesita mucha más energía para extraer, refinar, 
               transportar y procesar materias primas que para transformar materiales reciclados ya disponibles.
              </Text>
            </ScrollView>
          )}
        </>
      ) : (
        <>
          <Text style={styles.timer}>Tiempo Restante: {timeLeft} s</Text>

          <View style={styles.itemContainer}>
            {currentItem && (
              <Image source={currentItem.image} style={styles.itemImage} />
            )}
          </View>

          <View style={styles.binsContainer}>
            {bins.map((bin) => (
              <TouchableOpacity
                key={bin.id}
                style={styles.binContainer}
                onPress={() => handleChoice(bin.id)}
                disabled={isGamePaused} // Deshabilitar botones cuando el juego está en pausa
              >
                <Image source={bin.image} style={styles.binImage} />
                <Text style={styles.binText}>{bin.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={isGamePaused ? resumeGame : pauseGame}
              style={styles.pauseButton}
            >
              <Text style={styles.pauseButtonText}>
                {isGamePaused ? 'Reanudar' : 'Pausar'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetGame} style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reiniciar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={resetGame} style={styles.infoButton}>
              <Text style={styles.infoButtonText}>Ver Info</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default ReciclajeGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#388E3C',
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 5,
  },
  bestScore: {
    fontSize: 18,
    textAlign: 'center',
    color: '#388E3C',
    marginBottom: 20,
  },
  timer: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#D32F2F',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  binsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  binContainer: {
    alignItems: 'center',
  },
  binImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  binText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  startButton: {
    backgroundColor: '#388E3C',
    padding: 15,
    marginHorizontal: 50,
    borderRadius: 10,
  },
  startButtonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  pauseButton: {
    backgroundColor: '#FBC02D',
    padding: 10,
    borderRadius: 8,
  },
  pauseButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 8,
  },
  resetButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  infoButton: {
    backgroundColor: '#1976D2',
    padding: 10,
    borderRadius: 8,
  },
  infoButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
    textAlign: 'justify',
  },
  mainImage: {
    alignSelf: 'center',   
    width: '100%',        
    height: 600,           
    resizeMode: 'contain', 
    marginBottom: 20,      
  },
});
