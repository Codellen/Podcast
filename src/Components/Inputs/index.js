import React from 'react'
import "./styles.css"
function Input({state,setState,type,placeholder,required}) {
  return (
    <div>
      <input type={type} onChange={(event)=>{setState(event.target.value)}} value={state} placeholder={placeholder} required={required} className='input' >
      </input>
    </div>
  )
}

export default Input


