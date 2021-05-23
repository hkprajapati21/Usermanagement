/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import UserList from './app/module/userList/UserList';
import AppNavigation from './app/navigation/AppNavigation';



const App  = () => {
  const isDarkMode = useColorScheme() === 'dark';

  

  return (
    <>
   <AppNavigation/>
   </>

  );
};


export default App;
