import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Button, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles.tsx';

const InputBar = () => {
  const [currentInput, setCurrentInput] = useState("empty");
  const [textInput, setTextInput] = useState("");
  const [chatHistory, setChatHistory] = useState<{ text: string; isResponse: boolean }[]>([]);
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async () => {
    console.log(textInput);
    try {
      // Send the text input value to the REST API
      const response = await fetch('http://10.0.2.2:5000/textToText', {
        method: 'POST',
        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
      });
      console.log("Response:" + response);
      if (response.ok) {
        // Handle the successful response from the REST API
        console.log("Response Ok");
        const data = await response.json();
        console.log("Data: " + data);
        setResponseText(data["response"]);
        setChatHistory([
          ...chatHistory,
          { text: textInput, isResponse: false }, // User input
          { text: data["response"], isResponse: true }, // API response
        ]);
        setTextInput(""); // Clear text input after successful submission
      } else {
        // Handle the error response from the REST API
        console.log("Response not Ok");
        console.error("API error:", response.status);
        setResponseText("Error: " + response.status); // Set the response text to display the error status
      }
    } catch (error) {
      // Handle any network or other errors
      console.log("Error Oh No");
      console.error("Error:", error);
      setResponseText("Error: " + error); // Set the response text to display the error message
    }
    console.log("Response Text: " + responseText);
  };

  return (
    <View style={styles.inputContainer}>
      <View style={styles.input}>
        <Pressable onPress={() => setCurrentInput("text")}>
          <Image source={require('../images/textinput.png')} />
        </Pressable>
        <Pressable onPress={() => setCurrentInput("voice")}>
          <Image source={require('../images/voiceinput.png')} />
        </Pressable>
      </View>

      {currentInput === "text" && (
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter text"
            onChangeText={(text) => setTextInput(text)}
          />
          <Button title="Submit" onPress={handleSubmit} />
          {responseText === "" && <ActivityIndicator />}
          {responseText && <Text>{responseText}</Text>}
        </View>
      )}

      {currentInput === "voice" && (
        <View>
          <Text> In Here wowie</Text>
        </View>
      )}

      {chatHistory.length > 0 && (
        <ScrollView style={styles.chatHistory}>
          {chatHistory.map((message, index) => (
            <View key={index} style={message.isResponse ? styles.responseItem : styles.userItem}>
              <Text>{message.text}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default InputBar;
