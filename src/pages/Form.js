import React, { Component } from 'react';
import {TextInput,ScrollView,TouchableOpacity,Image} from 'react-native'
import {Root,Text,Form,Picker,Radio,ListItem } from 'native-base';
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
      city:'',
      cities: [],
      enablePicker: false,
      pickerdisabled: styles.estadoDisabled,
      radioSelected: false,
      finalidade: '',
      type:'',
      casaSelected: true,
      apartSelected: false,
      commerceSelected: false,
      image: [],
    }
  }

  filterCities(id){
    const cidades = cities.filter( city => city.Estado == id)
    return cidades
  }

  pictures(){
    if(this.state.image.length === 5){
      return
    }
    this.setState({image: [...this.state.image,{id:1,nome:'test.png'}]})
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
              <View style={styles.row}>
                <View>
                  <Text style={styles.label}>Estado</Text>   
                  <View style={styles.estado}>         
                      <Picker 
                        style={styles.picker}
                        onValueChange={ value => {
                          this.setState({state: value});
                          this.setState({enablePicker: true})
                          this.setState({pickerdisabled: ''})
                          this.setState({cities:this.filterCities(value.id)})
                        }}
                      >
                        <Picker.Item label="Selecione um estado" value=""/>
                        {states.map( state => (
                          <Picker.Item label={state.Nome} key={state.ID} value={{id: state.ID,name: state.Nome}} />
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
                        {this.state.cities.map( city => (
                          <Picker.Item label={city.Nome} key={city.Nome} value={city.Nome}/>
                        ))}
                      </Picker>
                  </View>                
                </View>
              </View>
              <View>
                <Text style={styles.label}>Endereço</Text>
                <TextInput placeholder="Digite o endereço aqui" style={styles.input} placeholderTextColor="#6C94A0"/>
              </View>
              <View>
                <Text style={styles.label}>Descrição</Text>
                <TextInput placeholder="Digite a descrição aqui aqui" style={[styles.input,styles.description]} placeholderTextColor="#6C94A0"/>
              </View>
              <View>
                <Text style={styles.label}>Preço</Text>
                <TextInput placeholder="Digite o preço aqui" style={styles.input} placeholderTextColor="#6C94A0"/>
              </View>
              <View style={{width:'90%'}}>
                <Text style={styles.label}>Finalidade</Text>
                <View style={styles.row}>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={!this.state.radioSelected} onPress={()=>{
                        this.setState({radioSelected:!this.state.radioSelected})
                        this.setState({finalidade:'Vender'})
                      }}/>
                      <Text style={styles.radioLabel}>Vender</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Radio color={"#15B025"} selectedColor={"#5cb85c"} onPress={()=>{
                      this.setState({radioSelected:!this.state.radioSelected})
                      this.setState({finalidade:'Alugar'})
                    }} selected={this.state.radioSelected}/>
                    <Text style={styles.radioLabel}> Alugar</Text>
                  </ListItem>
                </View>
              </View>
              <View style={{width:'90%'}}>
                <Text style={styles.label}>Tipo de imóvel</Text>
                <View style={[styles.row,styles.imovel]}>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={this.state.casaSelected} onPress={()=>{
                        this.setState({casaSelected:true})
                        this.setState({apartSelected:false})
                        this.setState({commerceSelected:false})
                        this.setState({type:'Casa'})
                      }}/>
                      <Text style={styles.radioLabel}>Casa</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={this.state.apartSelected} onPress={()=>{
                        this.setState({casaSelected:false})
                        this.setState({apartSelected:true})
                        this.setState({commerceSelected:false})
                        this.setState({type:'Apartamento'})
                      }}/>
                      <Text style={styles.radioLabel}>Apartamento</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={this.state.commerceSelected} onPress={()=>{
                        this.setState({casaSelected:false})
                        this.setState({apartSelected:false})
                        this.setState({commerceSelected:true})
                        this.setState({type:'Comércio'})
                      }}/>
                      <Text style={styles.radioLabel}>Comércio</Text>
                  </ListItem>
                </View>
              </View>         
            </Form>
            <View style={styles.line}/>
            <Text style={styles.dados}>Imagens</Text>
            <TouchableOpacity style={styles.takePicture}>
              <Text style={styles.buttonText}>Tirar foto</Text>
            </TouchableOpacity>
            <View>
                {this.state.image.map(image => (
                  <View style={styles.images} key={image.id}>
                    <Image style={styles.image}/>
                    <View>
                      <Text>{image.id}</Text>
                      <Text>{image.nome}</Text>
                    </View>
                  </View>
                ))}
            </View>
            {this.state.image.length < 5 && (
              <TouchableOpacity style={styles.getPicture} onPress={()=>this.pictures()}>
              <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            )}
            
            <View style={styles.line}/>
            <TouchableOpacity style={[styles.takePicture,styles.cadastrar]}>
              <Text style={{fontSize: 20}}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
      </Root>
    );
  }
}