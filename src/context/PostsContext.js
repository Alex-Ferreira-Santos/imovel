import React,{createContext,useState} from 'react';

export const Post = createContext({})

export function PostProvider(){
    const [post,setPost] = useState([ ])

    return(
        <Post.Provider value={
            post
        }>
            {children}
        </Post.Provider>
    )
}