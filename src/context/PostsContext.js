import React,{createContext,useState} from 'react';

export const PostContext = createContext({})

export function PostProvider(props){
    const [posts,setPosts] = useState([
        {id:1,title:'Casa 2 quartos a venda',price:300000,city:'Rio de Janeiro',state:'Rio de Janeiro',finalidade:'Venda',type:'Casa'},
        {id:2,title:'Apartamento 2 quartos para alugar',price:1200,city:'Niterói',state:'Rio de Janeiro',finalidade:'Aluguel',type:'Apartamento'},
        {id:3,title:'Comércio a venda',price:500000,city:'Volta Redonda',state:'Rio de Janeiro',finalidade:'Venda',type:'Comércio'},
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