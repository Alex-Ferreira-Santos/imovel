import React, {useContext,useState} from 'react';
import {TextInput,ScrollView,TouchableOpacity,Image,PermissionsAndroid,Platform} from 'react-native'
import {Root,Text,Form,Picker,Radio,ListItem} from 'native-base';
import {View} from 'react-native'
import styles from '../styles/form'
import states from '../../Estados.json'
import cities from '../../Cidades.json'
import {PostContext} from '../context/PostsContext'
import {launchImageLibrary} from 'react-native-image-picker'

export default function ImovelForm(props){

  const [state,setState] = useState('')
  const [title,setTitle] = useState('')
  const [adress,setAdress] = useState('')
  const [city,setCity] = useState('')
  const [cidades,setCidades] = useState([])
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState('')
  const [enablePicker,setEnablePicker] = useState(false)
  const [pickerdisabled,setPickerdisabled] = useState(styles.estadoDisabled)
  const [radioSelected,setRadioSelected] = useState(false)
  const [finalidade,setFinalidade] = useState('Vender')
  const [type,setType] = useState('Casa')
  const [casaSelected,setCasaSelected] = useState(true)
  const [apartSelected,setApartSelected] = useState(false)
  const [commerceSelected,setCommerceSelected] = useState(false)
  
  const {newPost,image,addImage,posts,removeImage} = useContext(PostContext)

  function filterCities(id){
    const cidades = cities.filter( city => city.Estado == id)
    setCity(cidades[0].Nome)
    return cidades
  }

  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }
  
  async function getPictures() {
    if (Platform.OS === "android" && !(await hasAndroidPermission())) {
      return;
    }
    const options = {
      title: 'Selecione uma foto',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options,(response)=>{
      if(response.didCancel){
        return
      }
      addImage(response.uri)
    })
  };

    return (
      <Root>
        <ScrollView style={{backgroundColor:'white'}}>
            <Text style={styles.dados}>Dados</Text> 
            <View style={styles.line}/>
            <Form style={styles.form}>
              <View>
                <Text style={styles.label}>Título</Text>
                <TextInput placeholder="Digite o título aqui" style={styles.input} placeholderTextColor="#6C94A0" onChangeText={value=>{
                  setTitle(value)
                }}/>
              </View>
              <View style={styles.row}>
                <View>
                  <Text style={styles.label}>Estado</Text>   
                  <View style={styles.estado}>         
                      <Picker 
                        style={styles.picker}
                        onValueChange={ value => {
                          setState(value.name)
                          setEnablePicker(true)
                          setPickerdisabled('')
                          setCidades(filterCities(value.id))
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
                  <View style={[styles.estado,pickerdisabled]}>         
                      <Picker 
                        style={[styles.picker,pickerdisabled]}
                        enabled={enablePicker}
                        onPress={value=>{
                          setCity(value)
                        }}          
                      >
                        <Picker.Item label="Selecione uma cidade" value=""/>
                        {cidades.map( city => (
                          <Picker.Item label={city.Nome} key={city.Nome} value={city.Nome}/>
                        ))}
                      </Picker>
                  </View>                
                </View>
              </View>
              <View>
                <Text style={styles.label}>Endereço</Text>
                <TextInput placeholder="Digite o endereço aqui" style={styles.input} placeholderTextColor="#6C94A0" onChangeText={val=>setAdress(val)}/>
              </View>
              <View>
                <Text style={styles.label}>Descrição</Text>
                <TextInput placeholder="Digite a descrição aqui aqui" style={[styles.input,styles.description]} placeholderTextColor="#6C94A0" onChangeText={val=>setDescription(val)} multiline={true}/>
              </View>
              <View>
                <Text style={styles.label}>Preço</Text>
                <TextInput placeholder="Digite o preço aqui" style={styles.input} placeholderTextColor="#6C94A0" onChangeText={val=>setPrice(Number(val))} keyboardType="numeric"/>
              </View>
              <View style={{width:'90%'}}>
                <Text style={styles.label}>Finalidade</Text>
                <View style={styles.row}>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={!radioSelected} onPress={()=>{
                        setRadioSelected(!radioSelected)
                        setFinalidade('vender')
                      }}/>
                      <Text style={styles.radioLabel}>Vender</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Radio color={"#15B025"} selectedColor={"#5cb85c"} onPress={()=>{
                      setRadioSelected(!radioSelected)
                      setFinalidade('Alugar')
                    }} selected={radioSelected}/>
                    <Text style={styles.radioLabel}> Alugar</Text>
                  </ListItem>
                </View>
              </View>
              <View style={{width:'90%'}}>
                <Text style={styles.label}>Tipo de imóvel</Text>
                <View style={[styles.row,styles.imovel]}>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={casaSelected} onPress={()=>{
                        setCasaSelected(true)
                        setApartSelected(false)
                        setCommerceSelected(false)
                        setType('Casa')
                      }}/>
                      <Text style={styles.radioLabel}>Casa</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={apartSelected} onPress={()=>{
                        setCasaSelected(false)
                        setApartSelected(true)
                        setCommerceSelected(false)
                        setType('Apartamento')
                      }}/>
                      <Text style={styles.radioLabel}>Apartamento</Text>
                  </ListItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                      <Radio color={"#15B025"} selectedColor={"#5cb85c"} selected={commerceSelected} onPress={()=>{
                        setCasaSelected(false)
                        setApartSelected(false)
                        setCommerceSelected(true)
                        setType('Comércio')
                      }}/>
                      <Text style={styles.radioLabel}>Comércio</Text>
                  </ListItem>
                </View>
              </View>         
            </Form>
            <View style={styles.line}/>
            <Text style={styles.dados}>Imagens</Text>
            <TouchableOpacity style={styles.takePicture} onPress={()=>props.navigation.navigate('picture')}>
              <Text style={styles.buttonText}>Tirar foto</Text>
            </TouchableOpacity>
            <View>
                {image.map(imagem => (
                  <View style={styles.images} key={imagem.id}>
                    <Image source={{uri:imagem.uri}} style={styles.image}/>
                    <View style={styles.imageData}>
                      <Text style={{fontSize: 20}}>{imagem.nome}</Text>
                      <TouchableOpacity style={styles.remove} onPress={()=>{
                        removeImage(imagem.id)
                      }}>
                        <Text style={{color:'white'}}>Remover</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View>
            {image.length < 5 && (
              <TouchableOpacity style={styles.getPicture} onPress={()=>getPictures()}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            )}
            
            <View style={styles.line}/>
            <TouchableOpacity style={[styles.takePicture,styles.cadastrar]} onPress={()=>{
              if([state,city,title,adress,description,price].includes('')){
                alert('Preencha todos os campos para cadastrar um imóvel')
                return
              }else{

                newPost({
                id:posts.length+1,title, state, city, adress, description, price, finalidade, type,image
                })
                props.navigation.navigate('details',{title, price, type, finalidade,state, city, adress, description,image})
              }
            }}>
              <Text style={{fontSize: 20}}>Cadastrar</Text>
            </TouchableOpacity>
        </ScrollView>
      </Root>
    );
}