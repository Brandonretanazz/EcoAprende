import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../services/firebaseConfig'; // Asegúrate de que la ruta sea correcta

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña.          En caso de no recibir el correo verifique en la forma que esta escrito');
        setError('');
      })
      .catch(error => {
        setMessage('');
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar Contraseña</Text>
      <TextInput
        placeholder="INGRESE SU CORREO"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
        placeholderTextColor="white"
      />
      <TouchableOpacity onPress={handlePasswordReset} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Correo de Recuperación</Text>
      </TouchableOpacity>
      {message ? <Text style={styles.message}>{message}</Text> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#CCCCCC',
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#A0A0A0',
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    color: '#FFFFFF',
    backgroundColor: '#999999',
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#056C6B',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: 'black',
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;