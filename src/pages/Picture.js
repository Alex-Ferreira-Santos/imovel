import React,{useState,useContext} from 'react';
import {View,Text,TouchableOpacity,StatusBar,Image} from 'react-native'
import {RNCamera} from 'react-native-camera'
import { PostContext } from '../context/PostsContext';
import styles from '../styles/pictures'

function Picture(props){
    let camera
    const {addImage} = useContext(PostContext)
    const [imageUri,setImageUri] = useState('')
    const [show,setShow] = useState(false)
    async function takePicture(){
        if(camera){
            const options = {base64:true}
            const data = await camera.takePictureAsync(options)
            setImageUri(data.uri)
            setShow(true)
        }
    }
    return(
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent"/>
            <RNCamera 
                ref={ref => {
                    camera = ref
                }}
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                androidCameraPermissionOptions={{
                    title: 'Permissão para usar a câmera',
                    message: 'Nós precisamos da sua permissão para usar a câmera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancelar',
                }}
            />
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableOpacity style={styles.capture} onPress={()=>{takePicture()}}>
                    <Text>Tirar foto</Text>
                </TouchableOpacity>
            </View>
            {show &&(
                <View style={styles.fullImage}>
                    <Image source={{uri: imageUri}} style={styles.fullScreen}/>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.remove} onPress={()=>setShow(false)}>
                            <Text style={styles.buttonText}>Remover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirm} onPress={()=>{
                            addImage(imageUri)
                            props.navigation.navigate('form')
                            alert('imagem adicionada')
                        }}>
                            <Text style={styles.buttonText}>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )} 
            
        </View>
    )
}

export default Picture