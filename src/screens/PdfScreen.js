import React from 'react';
import {
  TouchableHighlight,
  View,
  Text
} from 'react-native';
import Pdf from 'react-native-pdf';
import styles from '../styles/PdfScreenStyles';

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
