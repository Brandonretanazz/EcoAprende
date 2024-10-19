import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const VideoScreen = () => {
  const navigation = useNavigation();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mainVideo, setMainVideo] = useState(require('../assets/video.mp4'));  // Video principal por defecto
  const [selectedVideoTitle, setSelectedVideoTitle] = useState('La importancia de reciclar - Explicación');

  // Función para cambiar el video principal
  const handleVideoSelect = (videoFile, title) => {
    setMainVideo(videoFile);
    setSelectedVideoTitle(title);
  };

  // Función para pausar/reanudar el video
  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Videos</Text>
      </View>

      {/* Video Principal */}
      <View style={styles.videoWrapper}>
        <Video
          ref={videoRef}
          source={mainVideo}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={isPlaying}
          style={styles.videoPlayer}
        />
        <TouchableOpacity style={styles.playPauseButton} onPress={handlePlayPause}>
          <Icon name={isPlaying ? "pause" : "play"} size={28} color="white" />
        </TouchableOpacity>
      </View>

      {/* Descripción del video principal */}
      <View style={styles.videoDescription}>
        <Text style={styles.videoTitle}>{selectedVideoTitle}</Text>
        <Text style={styles.videoText}>Descripcion. </Text>
        <Text style={styles.videoText}>En este video encontrarás una explicación acerca de la importancia de reciclar.</Text>
      </View>

      {/* Lista de videos pequeños */}
      <ScrollView style={styles.videoList}>
        <View style={styles.videoRow}>
          <TouchableOpacity onPress={() => handleVideoSelect(require('../assets/video.mp4'), 'Video 1')}>
            <View style={styles.videoThumbnail}></View>
          </TouchableOpacity>
          <Text style={styles.videoItemTitle}>Video 1</Text>
        </View>

        <View style={styles.videoRow}>
          <TouchableOpacity onPress={() => handleVideoSelect(require('../assets/video2.mp4'), 'Video 2')}>
            <View style={styles.videoThumbnail}></View>
          </TouchableOpacity>
          <Text style={styles.videoItemTitle}>Video 2</Text>
        </View>

        <View style={styles.videoRow}>
          <TouchableOpacity onPress={() => handleVideoSelect(require('../assets/video.mp4'), 'Video 3')}>
            <View style={styles.videoThumbnail}></View>
          </TouchableOpacity>
          <Text style={styles.videoItemTitle}>Video 3</Text>
        </View>
      </ScrollView>

      {/* Bottom Icons */}
      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
          <Icon name="home" size={28} color="white" />
          <Text style={styles.iconText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.iconContainer}>
          <Icon name="list" size={28} color="white" />
          <Text style={styles.iconText}>Contenido</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Game')} style={styles.iconContainer}>
          <Icon name="game-controller-outline" size={28} color="white" />
          <Text style={styles.iconText}>Jugar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Progreso')} style={styles.iconContainer}>
          <Icon name="star" size={28} color="white" />
          <Text style={styles.iconText}>Progreso</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.iconContainer}>
          <Icon name="person" size={28} color="white" />
          <Text style={styles.iconText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CAC2C3',
  },
  header: {
    padding: 15,
    backgroundColor: '#056C6B',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  videoWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  videoPlayer: {
    width: '100%',
    height: 200,
    backgroundColor: 'black',
    marginTop: -11,
  },
  playPauseButton: {
    position: 'absolute',
    bottom: 10,
    left: Dimensions.get('window').width / 2 - 14,
  },
  videoDescription: {
    padding: 16,
  },
  videoTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  videoText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  videoList: {
    padding: 16,
  },
  videoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  videoThumbnail: {
    width: 80,
    height: 80,
    backgroundColor: '#000',
    marginRight: 10,
  },
  videoItemTitle: {
    fontSize: 16,
    color: 'black',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#4DBEA2',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
});

export default VideoScreen;
