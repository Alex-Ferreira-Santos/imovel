import React,{createContext,useState} from 'react';

export const PostContext = createContext({})

export function PostProvider(props){
    const [post,setPost] = useState([ ])

    function newPost(object){
        setPost([...post,object])
    }
    function teste(){
        console.log('teste')
    }

    return(
        <PostContext.Provider value={
            post,
            newPost,
            teste
        }>
            {props.children}
        </PostContext.Provider>
    )
}