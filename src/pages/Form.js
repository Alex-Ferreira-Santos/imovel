import React, { Component } from 'react';
import {TextInput,ScrollView} from 'react-native'
import {Root,Text,Form,Picker,Item } from 'native-base';
import {View} from 'react-native'
import styles from '../styles/form'
import states from '../../Estados.json'
export default class GeneralExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonAvailable: false,
    }
  }

  render() {
    return (
      <Root>
        <ScrollView>
            <Text style={styles.dados}>Dados</Text>
            <View style={styles.line}/>
            <Form style={styles.form}>
              <View>
                <Text style={styles.label}>Título</Text>
                <TextInput placeholder="Digite o título aqui" style={styles.input} placeholderTextColor="#6C94A0"/>
              </View>
              <View style={styles.local}>
                <View>
                  <Text style={styles.label}>Estado</Text>
                  <Item picker>
                    <Picker 
                    style={styles.input}
                    placeholder="Selecione seu estado"
                    placeholderStyle={{ color: "#6C94A0" }}
                    placeholderIconColor="#007aff"
                  >
                    <Picker.Item label="Wallet" value="key0" />
                  </Picker>
                  </Item>
                </View>
                <View>
                  <Text style={styles.label}>Cidade</Text>
                  <Item picker>
                    <Picker 
                    style={styles.input}
                    placeholder="Selecione sua cidade"
                    placeholderStyle={{ color: "#6C94A0" }}
                    placeholderIconColor="#007aff"
                  >
                    <Picker.Item label="Wallet" value="key0" />
                  </Picker>
                  </Item>
                  
                </View>
              </View>
              
              
            </Form>
        </ScrollView>
      </Root>
    );
  }
}