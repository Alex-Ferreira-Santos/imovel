import React, { Component } from 'react';
import {Root, Container,Text,Form,Item,Input,Label } from 'native-base';
import {View} from 'react-native'
import styles from '../styles/form'
export default class GeneralExample extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Text style={styles.dados}>Dados</Text>
          <View style={styles.line}/>

        </Container>
      </Root>
    );
  }
}