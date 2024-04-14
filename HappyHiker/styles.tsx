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
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: 'lightblue',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'lightgreen',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    bottom: 0,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 40,
    margin: 10,
  },
  textInputContainer: {
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatHistory: {
    flex: 1,
    padding: 10,
  },
  userItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  responseItem: {
    backgroundColor: '#e0e0ff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
  },
});

export default styles;