/**
 * Home page for Happy Hiker
 */

import React from 'react';
import styles from './styles.tsx';
import HeaderBar from './components/HeaderBar.tsx';
import Footer from './components/Footer.tsx';
import Tagline from './components/Tagline.tsx';
import Bubble from './components/Bubble.tsx';
import InputBar from './components/InputBar.tsx';
// import Page from './components/VoiceInput.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import MainContainer from './navigation/MainContainer.tsx';

/**
 * Section component for Happy Hiker
 * @param children - the children of the component
 * @param title - the title of the component
 * @returns a JSX element
 */

function App(): React.JSX.Element {
  return <MainContainer />;
}

export default App;