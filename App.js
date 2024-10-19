// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import ReciclajeScreen from './screens/ReciclajeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ProgresoScreen from './screens/Progresoscreen'
import CambioClimaticoScreen from './screens/CambioClimaticoScreen';
import BiodiversidadScreen from './screens/BiodiversidadScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GameScreen from './screens/GameScreen';
import ReciclaScreen from  './screens/ReciclaScreen';
import BioScreen from  './screens/BioScreen';
import MapasScreen from  './screens/MapasScreen';
import VideosScreen from './screens/VideosScreen';
import QuizReciclajeScreen from './screens/QuizReciclajeScreen';
import QuizCambioClimaticoScreen from './screens/QuizCambioClimaticoScreen';
import QuizBiodiversidadScreen from './screens/QuizBiodiversidadScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Reciclaje" component={ReciclajeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Cambio Climático" component={CambioClimaticoScreen} />
        <Stack.Screen name="Biodiversidad" component={BiodiversidadScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Progreso" component={ProgresoScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Recicla" component={ReciclaScreen} /> 
        <Stack.Screen name="Bio" component={BioScreen} /> 
        <Stack.Screen name="MapasScreen" component={MapasScreen} />
        <Stack.Screen name="VideosScreen" component={VideosScreen} />
        <Stack.Screen name="QuizReciclajeScreen" component={QuizReciclajeScreen} />
        <Stack.Screen name="QuizCambioClimaticoScreen" component={QuizCambioClimaticoScreen} />
        <Stack.Screen name="QuizBiodiversidadScreen" component={QuizBiodiversidadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
