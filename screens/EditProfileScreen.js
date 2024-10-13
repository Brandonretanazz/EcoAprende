import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth } from '../services/firebaseConfig';
import { updateProfile } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator'; // Importar la librería
import { Avatar } from 'react-native-elements';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import uuid from 'react-native-uuid'; // Para generar nombres únicos

const EditProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(auth.currentUser?.photoURL || null);
  const [imageUri, setImageUri] = useState(null);

  // Avatares locales como URIs
  const avatars = [
    require('../assets/libelula.png'),
    require('../assets/pescado.png'),
    require('../assets/buho.png'),
    require('../assets/oveja.png'),
    require('../assets/linux.png'),
  ];

  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert("¡Permiso de acceso a la galería requerido!");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1, // Aquí la calidad es al 100%, pero vamos a reducirla más adelante
    });
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      setSelectedAvatar(null);
    }
  };

  // Reducir la calidad y tamaño de la imagen
  const manipulateImage = async (uri) => {
    try {
      const manipulatedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 300 } }],  // Cambiar el tamaño a 300px de ancho (puedes ajustar esto según sea necesario)
        { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG }  // Reducir la calidad a 50%
      );
      return manipulatedImage.uri;
    } catch (error) {
      console.error("Error manipulando la imagen: ", error);
      return uri;
    }
  };

  // Función para subir la imagen a Firebase y eliminar la anterior
  const uploadImageToFirebase = async (uri, oldImageUrl) => {
    try {
      const storage = getStorage();
      
      // Si existe una imagen anterior, eliminarla
      if (oldImageUrl && !oldImageUrl.startsWith('http://') && !oldImageUrl.startsWith('file://')) {
        const oldImageRef = ref(storage, oldImageUrl);
        await deleteObject(oldImageRef)
          .then(() => {
            console.log("Imagen anterior eliminada con éxito");
          })
          .catch((error) => {
            console.error("Error al eliminar la imagen anterior: ", error);
          });
      }

      // Genera un nuevo ID para la nueva imagen
      const imageId = uuid.v4();
      const storageRef = ref(storage, `profilePictures/${imageId}`);

      // Convierte la imagen en un blob para subirla a Firebase
      const response = await fetch(uri);
      const blob = await response.blob();

      // Sube la nueva imagen a Firebase Storage
      await uploadBytes(storageRef, blob);

      // Obtiene la URL de descarga de la nueva imagen
      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;

    } catch (error) {
      console.error("Error subiendo la imagen: ", error);
      return null;
    }
  };

  const handleSave = async () => {
    const user = auth.currentUser;
    if (user) {
      const newDisplayName = newName || user.displayName;
      let newPhotoURL = user.photoURL;

      // Si se seleccionó una imagen de la galería, reducir calidad y subirla a Firebase
      if (imageUri) {
        const manipulatedUri = await manipulateImage(imageUri);  // Reducir calidad antes de subir
        newPhotoURL = await uploadImageToFirebase(manipulatedUri, user.photoURL);
      } else if (selectedAvatar) {
        // Si se selecciona un avatar local, usar su URI local
        const assetSource = Image.resolveAssetSource(selectedAvatar);
        if (assetSource) {
          newPhotoURL = assetSource.uri; // Usar el URI local para el avatar
        }
      }

      // Solo actualiza si hay cambios en el nombre o en la foto de perfil
      if (newDisplayName !== user.displayName || newPhotoURL !== user.photoURL) {
        updateProfile(user, {
          displayName: newDisplayName,
          photoURL: newPhotoURL,
        })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          console.error("Error al actualizar el perfil: ", error);
        });
      } else {
        navigation.goBack();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nuevo Nombre:</Text>
        <TextInput
          style={styles.input}
          value={newName}
          onChangeText={setNewName}
          placeholder="Escribe tu nuevo nombre"
          placeholderTextColor="#CCCCCC"
        />
      </View>

      {/* Botón para seleccionar imagen de la galería */}
      <TouchableOpacity style={styles.imageContainer} onPress={handleImagePicker}>
        <Text style={styles.avatarText}>Selecciona una imagen de perfil:</Text>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.imagePreview} />
        ) : (
          <Text style={styles.selectImageText}>Toca aquí para seleccionar una imagen</Text>
        )}
      </TouchableOpacity>

      {/* Selección de avatar */}
      <Text style={styles.avatarText}>O selecciona un nuevo avatar:</Text>
      <View style={styles.avatarContainer}>
        {avatars.map((avatar, index) => (
          <TouchableOpacity key={index} onPress={() => { setSelectedAvatar(avatar); setImageUri(null); }}>
            <Avatar
              rounded
              source={avatar}
              size="medium"
              containerStyle={[
                styles.avatar,
                selectedAvatar === avatar && styles.selectedAvatar,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#4DBEA2',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 20,
    color: '#333',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#E0F7FA',
  },
  avatarText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 30,
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  avatar: {
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedAvatar: {
    borderColor: '#009688',
  },
  saveButton: {
    backgroundColor: '#4DBEA2',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
  },
  selectImageText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  imageContainer: {
    borderColor: '#B0BEC5',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
    backgroundColor: '#ffffff',
  },
});

export default EditProfileScreen;
