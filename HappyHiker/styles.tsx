import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      backgroundColor: 'lightgreen',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    headerText: {
      fontSize: 20,
    },
    tagline: {
      fontSize: 20,
    },
    bubble: {
      backgroundColor: 'lightcoral',
      borderRadius: 10,
      padding: 10,
      borderWidth: 2,
      borderColor: 'darkred',
      margin: 20,
    },
    input: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    footer: {
      backgroundColor: 'lightgreen',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'black',
      width: 200,
      height: 40,
      margin: 10,
    },
  });

export default styles;