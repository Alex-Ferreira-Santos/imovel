import React from 'react';
import {ScrollView,View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles/main'
import Imovel from '../components/Imovel'

function Main(props){
    return(
        <View style={{flex:1}}>
            <Text style={styles.title}>Imoveis Disponiveis</Text>
            <ScrollView contentContainerStyle={styles.container}>
                <Imovel/>
                <Imovel/>
                <Imovel/>
            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    props.navigation.navigate('form')
                }}>
                    <Text style={styles.buttonText}>Cadastrar Imovel</Text>
                </TouchableOpacity> 
            </View>
            
        </View>
    )
}

export default Main
