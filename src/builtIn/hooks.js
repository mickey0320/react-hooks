
const hookState = []
let index = 0

function useState(initialState){
  return useReducer(null,initialState) 
}

function useReducer(reducer,initialState){
if(hookState[index] === undefined){
    hookState[index] = initialState
  }
  const currentIndex = index
  const dispatch = (action) => {
    hookState[currentIndex] = typeof reducer === 'function'? reducer(hookState[currentIndex],action): action
  }

  return [hookState[index++], dispatch]
}

function useMemo(callback, deps){
  if(hookState[index] === undefined){
    const value = callback()
    hookState[index++] = [value, deps]
    return value
  }else{
    const oldDeps = hookState[index][1]
    if(oldDeps.every((oldDep,i)=> oldDep === deps[i])){
      return hookState[index++][0]
    }else{
      const value = callback()
      hookState[index++] = [value, deps]
      return value
    }
  }
}

function useCallBack(callback, deps){
if(hookState[index] === undefined){
    hookState[index++] = [callback, deps]
    return callback
  }else{
    const oldDeps = hookState[index][1]
    if(oldDeps.every((oldDep,i)=> oldDep === deps[i])){
      return hookState[index++][0]
    }else{
      hookState[index++] = [callback,deps]
      return callback
    }
  }
}

function useEffect(factory, deps){
  if(hookState[index]){
    const [lastDestory, lastDeps] = hookState[index]
    const isSame = lastDeps.every((lastDep, i)=> lastDep === deps[i])
    if(isSame){
      index++
    }else{
      lastDestory?.()
      setTimeout(()=>{
        const destroy = factory()
        hookState[index++] = [destroy, deps]
      })
    }
  }else{
    // hookState[index] = [factory, deps]
    setTimeout(()=>{
      const destory = factory()
      hookState[index++] = [destory, deps]
    })
  }
}

export {
  useState,
  useReducer,
  useMemo,
  useCallBack,
  useEffect
}
