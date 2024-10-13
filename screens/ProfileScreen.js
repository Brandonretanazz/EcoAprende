import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { auth } from '../services/firebaseConfig';
import { signOut } from "firebase/auth";

const ProfileScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || user.email.split('@')[0]);
      setUserEmail(user.email);
      setUserAvatar(user.photoURL); // Obtener el avatar de la información del usuario
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        console.error("Error al cerrar sesión: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={userAvatar ? { uri: userAvatar } : require('../assets/profile_picture.png')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{userName.toUpperCase()}</Text>
        <Text style={styles.profileEmail}>{userEmail}</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="pencil" size={24} color="#000" />
          <Text style={styles.optionText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('ChangePassword')}>
          <Icon name="key" size={24} color="#000" />
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.optionItem}>
          <Icon name="log-out" size={24} color="#ff6b6b" />
          <Text style={[styles.optionText, { color: '#ff6b6b' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#CCCCCC',
  },
  header: {
    backgroundColor: '#056C6B',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#CCCCCC',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  optionsContainer: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    backgroundColor: '#4DBEA2',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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

export default ProfileScreen;
