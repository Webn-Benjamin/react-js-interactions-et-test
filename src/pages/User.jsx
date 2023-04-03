import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import UserProfile from '../components/UserProfile'

function User () {
  const { id } = useParams()
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then(result => setUser(result.data))
  }, [id])

  return (
    user.id ? <UserProfile complete user={user}/>
      : <div className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  )
}

export default User
