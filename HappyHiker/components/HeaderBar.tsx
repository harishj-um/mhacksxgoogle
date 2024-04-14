import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

function HeaderBar(): React.JSX.Element {
  var isDarkMode = true;
  return (
    <View style={styles.header}>
      <Image 
        style={{width: 50, height: 50}}
        source={isDarkMode ? require('../images/moon.png') : require('../images/sun.png')}
        resizeMode={'contain'}
      />
      <Text style={styles.headerText}>Happy Hiker</Text>
      <Image source={require('../images/settings.png')} />
    </View>
  );
}

export default HeaderBar;