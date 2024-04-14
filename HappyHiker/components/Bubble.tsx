import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

type BubbleProps = {
  text: string;
};

function Bubble(props: BubbleProps): React.JSX.Element {
    return (
        <View style={styles.bubble}>
            <Text>{props.text}</Text>
        </View>
    );
}

export default Bubble;