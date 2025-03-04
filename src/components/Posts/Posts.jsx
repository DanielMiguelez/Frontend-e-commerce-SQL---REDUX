import React, { useEffect } from 'react'
import Post from './Post/Post'
import { useDispatch} from 'react-redux'
//import { useNavigate } from 'react-router-dom'
import { getAllPosts, reset } from '../../features/posts/postSlice'

const Posts = () => {

  const dispatch = useDispatch()
  //const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(reset())
  }, [])
  

  return (
    <div>
      Posts
      <Post/>
    </div>
  )
}

export default Posts