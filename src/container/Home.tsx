import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'

const Home = () => {
  const [num, setNum] = useState(0)
  const handleClick = () => {
    setNum(num + 1)
  }
  useDocumentTitle('首页')

  return (
    <div>
      <div>home</div>
      <div><Link to="/hello" >go to hello</Link></div>
      <button onClick={handleClick}></button>
    </div>
  )
}

export default Home