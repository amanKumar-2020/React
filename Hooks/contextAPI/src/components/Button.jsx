import React ,{useContext} from 'react'
import { UserContext } from '../context/UserContext.js'

const Button = () => {
  const {count,setCount} = useContext(UserContext)
  return (
    <div>
      {count}
      <button
      onClick={()=>setCount((count)=>count+1)}
      >inc</button>
    </div>
  )
}

export default Button ;
