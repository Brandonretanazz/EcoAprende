import React, { useState, useEffect, useRef } from 'react';
import { Audio } from 'expo-av';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { firestore } from '../services/firebaseConfig'; // Ajusta el path según sea necesario
import { doc, getDoc, setDoc } from 'firebase/firestore';
import AwesomeAlert from 'react-native-awesome-alerts'; // Importar AwesomeAlert
const items = [
  {
    id: 1,
    name: 'diario',
    type: 'papel',
    image: require('../assets/diario.png'),
  },
  {
    id: 2,
    name: 'anotador',
    type: 'papel',
    image: require('../assets/anotador.png'),
  },
  {
    id: 3,
    name: 'avion_papel',
    type: 'papel',
    image: require('../assets/avion_papel.png'),
  },
  {
    id: 4,
    name: 'Bote_azucar',
    type: 'vidrio',
    image: require('../assets/azucar.png'),
  },
  {
    id: 5,
    name: 'bolsa',
    type: 'plástico',
    image: require('../assets/bolsa.png'),
  },
  {
    id: 6,
    name: 'Botella_plastico',
    type: 'plástico',
    image: require('../assets/botella_plastico.png'),
  },
  {
    id: 7,
    name: 'gaseosa',
    type: 'plástico',
    image: require('../assets/gaseosa_llena.png'),
  },
  {
    id: 8,
    name: 'Taza de Vidrio',
    type: 'vidrio',
    image: require('../assets/teverde.png'),
  },
  {
    id: 9,
    name: 'jarra',
    type: 'vidrio',
    image: require('../assets/jarra_vidrio.png'),
  },
  {
    id: 10,
    name: 'leche',
    type: 'plástico',
    image: require('../assets/leche.png'),
  },  {
    id: 11,
    name: 'libro',
    type: 'papel',
    image: require('../assets/libro.png'),
  },  {
    id: 12,
    name: 'papeles',
    type: 'papel',
    image: require('../assets/papeles.png'),
  },  {
    id: 13,
    name: 'revista',
    type: 'papel',
    image: require('../assets/revista.png'),
  },  {
    id: 14,
    name: 'teverde',
    type: 'vidrio',
    image: require('../assets/teverde.png'),
  },
  {
    id: 15,
    name: 'tupper',
    type: 'plástico',
    image: require('../assets/tupper.png'),
  },
  {
    id: 16,
    name: 'vaso',
    type: 'plástico',
    image: require('../assets/vaso.png'),
  },
  {
    id: 17,
    name: 'botella vidrio',
    type: 'vidrio',
    image: require('../assets/botella_vidrio.png'),
  },
  {
    id: 18,
    name: 'botella rota vidrio',
    type: 'vidrio',
    image: require('../assets/botella_vidrio_rota.png'),
  },{
    id: 19,
    name: 'cafe',
    type: 'vidrio',
    image: require('../assets/cafe.png'),
  },{
    id: 20,
    name: 'aceite',
    type: 'vidrio',
    image: require('../assets/aceite.png'),
  },{
    id: 21,
    name: 'caja carton',
    type: 'papel',
    image: require('../assets/caja_carton.png'),
  },{
    id: 22,
    name: 'carta',
    type: 'papel',
    image: require('../assets/carta.png'),
  },{
    id: 23,
    name: 'cd',
    type: 'plástico',
    image: require('../assets/cd.png'),
  },{
    id: 24,
    name: 'copa',
    type: 'vidrio',
    image: require('../assets/copa.png'),
  },{
    id: 25,
    name: 'copa llena',
    type: 'vidrio',
    image: require('../assets/copa_llena.png'),
  },{
    id: 26,
    name: 'dentifrico',
    type: 'plástico',
    image: require('../assets/dentifrico.png'),
  },{
    id: 27,
    name: 'detergente',
    type: 'plástico',
    image: require('../assets/detergente.png'),
  },{
    id: 28,
    name: 'vinagre',
    type: 'vidrio',
    image: require('../assets/vinagre.png'),
  },





];

const bins = [
  {
    id: 'papel',
    name: 'Papel',
    image: require('../assets/papel.png'),
  },
  {
    id: 'plástico',
    name: 'Plástico',
    image: require('../assets/plastico.png'),
  },
  {
    id: 'vidrio',
    name: 'Vidrio',
    image: require('../assets/vidrio.png'),
  },
];
const ReciclajeGameScreen = () => {
  const [currentItem, setCurrentItem] = useState(null);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  // Variables de estado para AwesomeAlert
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTitle, setAlertTitle] = useState('');

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
      const docRef = doc(firestore, 'gameData', 'bestScore');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBestScore(docSnap.data().score);
      }
    } catch (error) {
      console.log('Error loading best score:', error);
    }
  };

  const saveBestScore = async (newBestScore) => {
    try {
      const docRef = doc(firestore, 'gameData', 'bestScore');
      await setDoc(docRef, { score: newBestScore });
    } catch (error) {
      console.log('Error saving best score:', error);
    }
  };

  const startGame = () => {
    setAlertTitle('Instrucciones del Juego');
    setAlertMessage('Selecciona el contenedor correcto para cada tipo de residuo. ¡Buena suerte!');
    setShowAlert(true);
  };

  const beginGame = () => {
    setIsGameStarted(true);
    setShowInfo(false);
    setScore(0);
    setTimeLeft(60);
    generateNewItem();
  };

  const pauseGame = () => {
    setIsGamePaused(true);
  };

  const resumeGame = () => {
    setIsGamePaused(false);
  };

  const generateNewItem = () => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
  };

  const handleChoice = (binType) => {
    if (isGamePaused) {
      return;
    }

    if (currentItem.type === binType) {
      playSuccessSound();
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        saveBestScore(newScore);
      }
      generateNewItem();
    } else {
      playFailureSound();
      endGame();
    }
  };

  const endGame = () => {
    playFailureSound();
    setAlertTitle('¡Fin del Juego!');
    setAlertMessage(`Tu puntuación es: ${score}`);
    setShowAlert(true);
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

  const playSuccessSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/success.mp3')
    );
    await sound.playAsync();
  };

  const playFailureSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/failure.mp3')
    );
    await sound.playAsync();
  };

  const gifSource = require('../assets/gifgame.gif');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juego de Reciclaje</Text>
      <Text style={styles.score}>Puntuación: {score}</Text>
      <Text style={styles.bestScore}>Mejor Puntuación: {bestScore}</Text>
      <View style={styles.gifContainer}>
        <Image source={gifSource} style={styles.gif} />
      </View>
      {!isGameStarted ? (
        <>
          <TouchableOpacity onPress={startGame} style={styles.startButton}>
            <Text style={styles.startButtonText}>Comenzar</Text>
          </TouchableOpacity>
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
                disabled={isGamePaused}
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
          </View>
        </>
      )}

      {/* Alerta personalizada */}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title={alertTitle}
        message={alertMessage}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="Aceptar"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
          if (!isGameStarted) {
            beginGame();
          }
        }}
      />
    </View>
  );
};

export default ReciclajeGameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCCCCC',  // Color de fondo principal
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#056C6B',  // Color principal
  },
  score: {
    fontSize: 22,
    textAlign: 'center',
    color: '#4DBEA2',  // Color secundario
    marginBottom: 5,
  },
  gifContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gif: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bestScore: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',  // Gris oscuro
    marginBottom: 20,
    fontWeight: '500',
  },
  timer: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#D32F2F',
    fontWeight: '600',
  },
  itemContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#e6dddb',
    padding: 10,
    borderRadius: 15,
    elevation: 4,  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  binsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
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
    marginTop: 5,
    fontSize: 16,
    color: '#4DBEA2',
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  startButton: {
    backgroundColor: '#056C6B',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  startButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pauseButton: {
    backgroundColor: '#D32F2F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  pauseButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});