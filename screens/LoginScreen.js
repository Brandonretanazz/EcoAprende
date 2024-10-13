import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseConfig'; // Importar auth desde tu configuración de Firebase

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('Home'); // Navegar a la pantalla de inicio
      })
      .catch(error => setError(error.message));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image.png')} // Ruta de la imagen
        style={styles.logo}
      />
      <TextInput
        placeholder="INGRESE SU CORREO"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={[styles.input, styles.emailInput]}
        placeholderTextColor="#FFFFFF" // Color del texto del placeholder
      />
      <TextInput
        placeholder="INGRESE CONTRASEÑA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        placeholderTextColor="#FFFFFF" // Color del texto del placeholder
      />
      <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.darkGreenButton]}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.newUserText}>Nuevo usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Olvidé mi contraseña</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Eco-héroes unidos por un mundo mejor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#CCCCCC',
  },
  logo: {
    width: 380,
    height: 380,
    marginBottom: 10,
    position: 'relative',
    top: -70,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#A0A0A0',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#FFFFFF',
  },
  emailInput: {
    backgroundColor: '#999999',
  },
  passwordInput: {
    backgroundColor: '#999999',
  },
  button: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  darkGreenButton: {
    backgroundColor: '#056B6C',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  newUserText: {
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    
  },
  footerText: {
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    bottom: -40,
  },
});

export default LoginScreen;