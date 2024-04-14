import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, Pressable, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const InputBar = () => {
  const [currentInput, setCurrentInput] = useState("empty");
  const [textInput, setTextInput] = useState("");

  return (
    <View style={styles.input}>
      <Pressable onPress={() => setCurrentInput("text")}>
        <Image source={require('../images/textinput.png')} />
      </Pressable>
      <Pressable onPress={() => setCurrentInput("voice")}>
        <Image source={require('../images/voiceinput.png')} />
      </Pressable>

      {currentInput === "text" && (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text"
            onChangeText={(text) => {
              setTextInput(text);
            }}
          />
          <Text>{textInput}</Text>
        </View>
      )}

      {currentInput === "voice" && (
        <View>
          <Text> In Here wowie</Text>
        </View>
      )}
    </View>
  );
}

export default InputBar;