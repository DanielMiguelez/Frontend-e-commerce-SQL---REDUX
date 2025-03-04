import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {getPostById} from '../../features/posts/postSlice'

const PostDetail = () => {

  const {id} = useParams();
  const dispatch = useDispatch()
  const {post} = useSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPostById(id))
  }, [])
  

  return (
    <div>
      <h2>Detalle del post {post?.id}</h2>
      <p>{post?.title}</p>
      <p>Realizado por : {post?.User?.name}</p>
      <p>Fecha : {post?.createdAt?.substring(0,10)} </p>
    </div>
  );

}

export default PostDetail;