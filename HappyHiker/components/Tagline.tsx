import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

function Tagline(): React.JSX.Element {
  return (
    <View>
      <Text>Let us guide you!</Text>
    </View>
  );
}

export default Tagline;