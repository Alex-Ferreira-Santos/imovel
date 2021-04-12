import React, { Component } from 'react';
import {TextInput,ScrollView} from 'react-native'
import {Root,Text,Form,Picker,Item } from 'native-base';
import {View} from 'react-native'
import styles from '../styles/form'
import states from '../../Estados.json'
import cities from '../../Cidades.json'
export default class GeneralExample extends Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonAvailable: false,
      state: '',
      enablePicker: false,
      pickerdisabled: styles.estadoDisabled
    }
  }

  filterCities(id){
    const cidades = cities.filter( city => city.Estado == id)
    return cidades
  }

  render() {
    return (
      <Root>
        <ScrollView style={{backgroundColor:'white'}}>
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
                  <View style={styles.estado}>         
                      <Picker 
                        style={styles.picker}
                        onValueChange={ value => {
                          this.setState({state: value});
                          this.setState({enablePicker: true})
                          this.setState({pickerdisabled: ''})
                          this.filterCities(value.id)
                        }}
                      >
                        <Picker.Item label="Selecione um estado" value=""/>
                        {states.map( state => (
                          <Picker.Item label={state.Nome} value={{id: state.ID,name: state.Nome}} />
                        ))}
                      </Picker>
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Cidade</Text> 
                  <View style={[styles.estado,this.state.pickerdisabled]}>         
                      <Picker 
                        style={[styles.picker,this.state.pickerdisabled]}
                        enabled={this.state.enablePicker}           
                      >
                        <Picker.Item label="Selecione uma cidade" value=""/>
                        
                      </Picker>
                  </View>                
                </View>
              </View>
              
              
            </Form>
        </ScrollView>
      </Root>
    );
  }
}