import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = () => {

  const { posts, isLoading } = useSelector((state) => state.posts)

  if (isLoading) {
    <p>Cargando</p>
  }

  return (
    <div className='postsPadre'>{posts.map(post =>
      <div key={post.id}  className='post'>
        <Link to={"/post/" + post.id}>
          <p >{post.title}</p>
        </Link>
      </div>
    )}</div>
  )
}

export default Post