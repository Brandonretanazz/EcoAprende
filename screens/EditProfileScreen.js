import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '../services/firebaseConfig';
import { updateProfile } from 'firebase/auth';

const EditProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');

  const handleSave = () => {
    const user = auth.currentUser;
    if (user) {
      updateProfile(user, { displayName: newName })
        .then(() => {
          navigation.goBack(); // Vuelve a la pantalla anterior
        })
        .catch(error => {
          console.error("Error al actualizar el perfil: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nuevo Nombre:</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
        placeholder="Escribe tu nuevo nombre"
      />
      <Button title="Guardar" onPress={handleSave} />
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

export default EditProfileScreen;
