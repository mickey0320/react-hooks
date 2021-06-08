import React from 'react'
import { useState } from '../builtIn/hooks'
import useDocumentTitle from '../hooks/useDocumentTitle'

interface ChildProps {
  name: string
}
const Child: React.FC<ChildProps> = (props) => {
  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
}
const Counter = () => {
  const [value, setValue] = useState('')
  useDocumentTitle('计数')
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {/* <Child /> */}
    </div>
  )
}

export default Counter