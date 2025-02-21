import React, { useEffect, useState } from 'react'
import Header from '../header'
import Welcome from '../welcome'
import { getUser } from '../../utils/authUtils'

const MainLayout = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser()
        setUser(userData)
      } catch (err) {
        setUser(null) // Reset user on error
      }
    }
    fetchUser()
  }, [user])

  return (
    <div className='bg-black text-white font-sans min-h-screen'>
      {user && <Welcome />}
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
