import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destroyPostById, getAllPosts } from '../../../features/posts/postSlice'

const PostAdmin = () => {

    const {posts} = useSelector((state) => state.posts)
    
    const deletePost = async (id) =>{
        await dispatch(destroyPostById(id))
        dispatch(getAllPosts())
    }

    const dispatch = useDispatch()

    const post = posts.map(post =>{
        return (
            <div key={post.id}>
               <span>{post.title}</span>
               <button onClick={()=>{deletePost(post.id)}}>Delete</button>
            </div>
        )
    })
    return <div>{post}</div>;
}

export default PostAdmin