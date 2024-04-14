import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#A4C2A4', // Forest green
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 50,
    fontFamily: 'Poppins-Bold', // Modern font
    color: '#333', // Dark brown
  },
  taglineContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tagline: {
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    fontFamily: 'Poppins-SemiBold', // Modern font
    color: '#333', // Dark brown
  },
  bubble: {
    backgroundColor: '#F2E8CF', // Light beige
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 30,
  },
  input: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#F0FFF0', // Light green
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#A4C2A4', // Forest green
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderRadius: 30,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#BDBDBD', // Light gray
    width: 400,
    height: 50,
    margin: 10,
    borderRadius: 5,
    fontFamily: 'Poppins-Regular', // Modern font
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
    backgroundColor: '#F2E8CF', // Light beige
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    fontFamily: 'Poppins-Regular', // Modern font
  },
  responseItem: {
    backgroundColor: '#E0E0FF', // Light blue
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignSelf: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    fontFamily: 'Poppins-Regular', // Modern font
  },
});

export default styles;
