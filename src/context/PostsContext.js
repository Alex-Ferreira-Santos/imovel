import React,{createContext,useState} from 'react';

export const PostContext = createContext({})

export function PostProvider(props){
    const [posts,setPosts] = useState([
        {id:1,title:'Casa 2 quartos a venda',price:300000,city:'Rio de Janeiro',state:'Rio de Janeiro',finalidade:'Venda',type:'Casa', adress:'rua a, 80',description:'Casa com 2 quartos e 2 banheiros a venda'},
        {id:2,title:'Apartamento 2 quartos para alugar',price:1200,city:'Niterói',state:'Rio de Janeiro',finalidade:'Aluguel',type:'Apartamento',adress:'rua b, 60',description:'Apartamento para aluguel com 2 quartos, 1 banehiro'},
        {id:3,title:'Loja de óculos a venda',price:500000,city:'Volta Redonda',state:'Rio de Janeiro',finalidade:'Venda',type:'Comércio', adress:'rua c, 40',description:'Loja de óculos a venda, o local tem por volta de 80m quadrados com 2 salas'},
    ])
    const [image,setImage] = useState([])

    function newPost(object){
        setPosts([...posts,object])
    }


    return(
        <PostContext.Provider value={{
            posts,
            newPost,
            image,
            setImage
        }}>
            {props.children}
        </PostContext.Provider>
    )
}