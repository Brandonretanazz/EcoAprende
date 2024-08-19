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
        setMessage('Se ha enviado un correo electrónico para restablecer tu contraseña.');
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
        placeholderTextColor="#A0A0A0"
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
    backgroundColor: '#3C553E',
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
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
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#17B559',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    color: 'green',
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;