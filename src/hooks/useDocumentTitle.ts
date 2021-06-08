import { useEffect, useRef } from "react"

const useDocumentTitle = (title: string, keepTitleOnMount = false) => {
  const oldTitle = useRef(document.title).current
  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepTitleOnMount) {
        document.title = oldTitle
      }
    }
  }, [keepTitleOnMount, oldTitle])

}

export default useDocumentTitle