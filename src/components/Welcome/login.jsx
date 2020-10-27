import React, { useState } from 'react';

const Login = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isMounted, setMounted] = useState(false)

  // Note: React.useEffect vs useEffect (will not use imported mock)
  React.useEffect(() => {
    setMounted(true)
  })

  const handleClick = () => {
    setLoggedIn(true)
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Login