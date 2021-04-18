import React,{createContext,useState} from 'react';
import casa1 from '../img/casa11.jpg';
import casa3 from '../img/casa13.jpg'
import casa4 from '../img/casa14.jpg'
import apart1 from '../img/apartamento1.jpg'
import apart2 from '../img/apartamento2.jpg'
import apart3 from '../img/apartamento3.jpg'
import loja from '../img/loja.jpg'
import loja2 from '../img/loja2.jpg'

export const PostContext = createContext({})

export function PostProvider(props){
    const [image,setImage] = useState([])
    const [posts,setPosts] = useState([
        {id:1,title:'Casa de luxo com 5 quartos a venda',price:700000,city:'Rio de Janeiro',state:'Rio de Janeiro',finalidade:'Venda',type:'Casa', adress:'Rua a, 80',description:'Casa com 5 quartos, 2 cozinhas, 2 salas, piscina, jardim e 3 banheiros',image:[{uri:casa1},{uri:casa3},{uri:casa4}]},
        {id:2,title:'Apartamento 2 quartos',price:2000,city:'Niterói',state:'Rio de Janeiro',finalidade:'Aluguel',type:'Apartamento',adress:'Rua b, 60',description:'Apartamento para aluguel com 2 quartos, 1 banehiro',image:[{uri:apart1},{uri:apart2},{uri:apart3}]},
        {id:3,title:'Loja de roupas',price:500000,city:'Volta Redonda',state:'Rio de Janeiro',finalidade:'Venda',type:'Comércio', adress:'Rua c, 40',description:'Loja de roupas a venda, o local tem por volta de 80m quadrados com 2 salas',image:[{uri:loja},{uri:loja2}]},
    ])
    const [count,setCount] = useState(1)
    

    function newPost(object){
        setPosts([...posts,object])
        setImage([])
        setCount(1)
    }

    function addImage(uri){
        setImage([...image,{id:count,nome:`imagem ${count}`,uri:uri}])
        setCount(count+1)
    }

    function removeImage(id){
        const position = image.findIndex(image => image.id === id)
        image.splice(position,1)
        setImage([...image])
    } 


    return(
        <PostContext.Provider value={{
            posts,
            newPost,
            addImage,
            image,
            removeImage,
            setImage
        }}>
            {props.children}
        </PostContext.Provider>
    )
}