import React from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import useUrlQueryParam from '../hooks/useUrlQueryParam'

const Hello = () => {
  const [urlQueryParam, setUrlQueryParam] = useUrlQueryParam(['name', 'age'])
  const changeParam = () => {
    setUrlQueryParam({ name: 'wzs', age: '22' })
  }
  // useDocumentTitle('Hello')
  return (
    <div>
      <p>name: {urlQueryParam.name}</p>
      <p>age: {urlQueryParam.age}</p>
      <div>
        <button onClick={changeParam}>改变参数</button>
      </div>
    </div>
  )
}

export default Hello