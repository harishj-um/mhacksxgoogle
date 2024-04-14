import React from 'react';
import styles from '../styles.tsx';
import { PropsWithChildren, useState, useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image, Pressable, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const InputBar = () => {
  const [currentInput, setCurrentInput] = useState("empty");
  const [textInput, setTextInput] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async () => {
    console.log(textInput);
    const ipAddressResponse = await fetch('https://api.ipify.org?format=json');
    const ipAddressData = await ipAddressResponse.json();
    const clientIP = ipAddressData.ip;
    console.log("Client IP:", clientIP);
    try {
      // Send the text input value to the REST API
      const response = await fetch('/textToText', {
        method: 'POST',
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
      });
      if (response.ok) {
        // Handle the successful response from the REST API
        const data = await response.json();
        setResponseText(data); // Assuming `data` contains the response text
      } else {
        // Handle the error response from the REST API
        console.error("API error:", response.status);
        setResponseText("Error: " + response.status); // Set the response text to display the error status
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("Error:", error);
      setResponseText("Error: " + error); // Set the response text to display the error message
    }
  };

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
          <Button title="Submit" onPress={handleSubmit} />
          {responseText && <Text>{responseText}</Text>}
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