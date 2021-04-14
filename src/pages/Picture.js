import React,{useState} from 'react';
import {View,Text,TouchableOpacity,StatusBar,Image} from 'react-native'
import {RNCamera} from 'react-native-camera'
import styles from '../styles/pictures'

function Picture(){
    let camera
    const [image,setImage] = useState('')
    async function takePicture(){
        if(camera){
            const options = {base64:true}
            const data = await camera.takePictureAsync(options)
            setImage(data.uri)
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
            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',backgroundColor:'gray' }}>
                <TouchableOpacity style={styles.capture} onPress={()=>{takePicture()}}>
                    <Text>Tirar foto</Text>
                </TouchableOpacity>
            </View>
            <Image uri={image} style={{width: 100, height: 100}}/>
        </View>
    )
}

export default Picture