import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Post () {
  const { id } = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(result => setPost(result.data))
  }, [id])
  return (
    <div>
      <div><b>userId</b> : {post.userId}</div>
      <div><b>id</b> : {post.id}</div>
      <div><b>title</b> : {post.title}</div>
      <div><b>body</b> : {post.body}</div>
    </div>
  )
}

export default Post
