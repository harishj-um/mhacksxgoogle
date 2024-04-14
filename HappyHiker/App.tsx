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

type SectionProps = PropsWithChildren<{
  title: string;
}>;
/**
 * Section component for Happy Hiker
 * @param children - the children of the component
 * @param title - the title of the component
 * @returns a JSX element
 */

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'dark-content'} />
      <HeaderBar />
      <Tagline />
      <Bubble text={'If you have an emergency, please alert 911 and local services immediately!'} />
      <InputBar />
      <Footer />
    </SafeAreaView>
  );
}

export default App;