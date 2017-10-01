import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  View,
  Text
} from 'react-native';

import Pdf from 'react-native-pdf';

export class PdfScreen extends React.Component {
  constructor(props) {
    super(props);
    this.pdf = null;
  }

  static navigationOptions = {
     header: null
  }

  render() {
    let source = {uri:'https://dev.onedigitaltrust.com/?i=docassemble.playground1%3AGenerateTrustDocumentsFromIOS.yml',cache:true};
    return (
      <View style={styles.container}>
        <Pdf 
          ref={(pdf)=>{this.pdf = pdf;}}
          source={source}
          horizontal={false}
          onError={(error)=>{
            console.log(error);
          }}
          style={styles.pdf}/>
      </View>
    )
  }
}

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