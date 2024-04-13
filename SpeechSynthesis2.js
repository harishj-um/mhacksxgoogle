//this one works by taking in an input file

const setVoiceAccent = require("./setVoiceAccent");
const fs = require("fs");

//set a global variable here for VoiceName
global.voiceAccent = 'en-US-AvaMultilingualNeural';

(function() {

  "use strict";

  var sdk = require("microsoft-cognitiveservices-speech-sdk");
  var readline = require("readline");

  var audioFile = "2HappyHikerTextToSpeech.wav";
  // This example requires environment variables named "SPEECH_KEY" and "SPEECH_REGION"
  const speechConfig = sdk.SpeechConfig.fromSubscription(process.env.SPEECH_KEY, process.env.SPEECH_REGION);
  const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);

  // The language of the voice that speaks.
  speechConfig.speechSynthesisVoiceName = global.voiceAccent; 

  // Create the speech synthesizer.
  var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  //Create input to from a text file
  const inputText = fs.readFileSync("input.txt", "utf8").trim();

    // Start the synthesizer and wait for a result.
    synthesizer.speakTextAsync(inputText,
        function (result) {
      if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("synthesis finished.");
      } else {
        console.error("Speech synthesis canceled, " + result.errorDetails +
            "\nDid you set the speech resource key and region values?");
      }
      synthesizer.close();
      synthesizer = null;
    },
        function (err) {
      console.trace("err - " + err);
      synthesizer.close();
      synthesizer = null;
    });
    console.log("Now synthesizing to: " + audioFile);
  
}());