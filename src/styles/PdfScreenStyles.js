import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  btn: {
    margin: 5,
    padding:5,
    backgroundColor: "blue",
  },
  btnDisable: {
    margin: 5,
    padding:5,
    backgroundColor: "gray",
  },
  btnText: {
    color: "#FFF",
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
  }
});

export default styles;