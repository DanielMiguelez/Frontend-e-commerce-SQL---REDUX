import React, { useEffect } from 'react'
import PostAdmin from './PostAdmin/PostAdmin'
import { useDispatch } from 'react-redux'
import {getAllPosts} from '../../features/posts/postSlice'

const Admin = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  
  return (
    <div>
      Admin
      <PostAdmin/>
    </div>
  )
}

export default Admin