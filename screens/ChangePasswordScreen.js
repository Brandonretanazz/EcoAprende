import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../services/firebaseConfig';
import { updatePassword } from 'firebase/auth';

const ChangePasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    const user = auth.currentUser;
    if (user) {
      updatePassword(user, newPassword)
        .then(() => {
          navigation.goBack(); // Vuelve a la pantalla anterior
        })
        .catch(error => {
          console.error("Error al cambiar la contraseña: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nueva Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="Escribe tu nueva contraseña"
        secureTextEntry
      />
      <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default ChangePasswordScreen;