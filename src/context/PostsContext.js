import React,{createContext,useState} from 'react';

export const PostContext = createContext({})

export function PostProvider(props){
    const [post,setPost] = useState([])
    const [image,setImage] = useState([])

    function newPost(object){
        setPost([...post,object])
        console.log(post)
    }


    return(
        <PostContext.Provider value={{
            post,
            newPost,
            image,
            setImage
        }}>
            {props.children}
        </PostContext.Provider>
    )
}