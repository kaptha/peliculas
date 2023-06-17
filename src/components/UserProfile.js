import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
export default function UserProfile() {
    const context =  useContext(UserContext)
  return (
    <div>
      {context.user}
    </div>
  )
}
