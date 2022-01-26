import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useEffect, useState } from 'react';
import RecipesNavigator from './navigation/RecipesNavigator';
import Loader from './components/Loader';

// const fetchFonts = async () => {
//   return await Font.loadAsync({
//     'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
//     'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
//   });
// };

export default function App() {

  // const [fontLoaded, setFontLoaded] = useState(false);

  // if (!fontLoaded) {
  //   return <AppLoading
  //     startAsync={fetchFonts}
  //     onFinish={setFontLoaded(true)}
  //   />;
  // }

  return (
    <RecipesNavigator />
  );
}
