import React,{createContext,useState} from 'react';

export const PostContext = createContext({})

export function PostProvider(props){
    const [post,setPost] = useState([ ])

    function newPost(object){
        setPost([...post,object])
    }

    return(
        <PostContext.Provider value={
            post,
            newPost
        }>
            {props.children}
        </PostContext.Provider>
    )
}