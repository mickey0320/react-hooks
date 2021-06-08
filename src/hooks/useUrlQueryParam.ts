import { useSearchParams } from 'react-router-dom'

const useUrlQueryParam = <T extends string>(keys: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const urlQueryParamObj = keys.reduce((memo, key) => {
    return { ...memo, [key]: searchParams.get(key) }
  }, {} as { [key in T]: string })

  const setSearchUrlParams = (param: Partial<{ [key in T]: string }>) => {
    setSearchParams({ ...Object.fromEntries(searchParams), ...param })
  }

  return [urlQueryParamObj, setSearchUrlParams] as const
}

export default useUrlQueryParam