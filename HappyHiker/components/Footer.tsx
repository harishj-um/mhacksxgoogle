import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

function Footer(): React.JSX.Element {
    return (
        <View style={styles.footer}>
            <Image source={require('../images/document.png')} />
            <Image source={require('../images/emergency.png')} />
            <Image source={require('../images/home.png')} />
            <Image source={require('../images/location.png')} />
            <Image source={require('../images/info.png')} />
        </View>
    );
}

export default Footer;