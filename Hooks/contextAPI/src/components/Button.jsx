import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Button = () => {
  const data = useContext(UserContext)
  return (
    <div>
      {data.count}
      <button onClick={()=>data.setCount((c)=>c+1)}>click</button>
    </div>
  )
}

export default Button
