import React,{useContext} from 'react';
import {ScrollView,View,Text,TouchableOpacity} from 'react-native'
import styles from '../styles/main'
import Imovel from '../components/Imovel'
import {PostContext} from '../context/PostsContext'

function Main(props){
    const {posts} = useContext(PostContext)
    return(
        <View style={{flex:1}}>
            <Text style={styles.title}>Imoveis Disponiveis</Text>
            <ScrollView contentContainerStyle={styles.container}>
                {posts.map(post=>(
                    <Imovel key={post.id} title={post.title} price={post.price} type={post.type} finalidade={post.finalidade} state={post.state} city={post.city} route={()=>props.navigation.navigate('details')}/>
                ))}
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
