import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'

const ScrollToTopContainer: React.FC = () => {
  const { path, theme } = useSelector((state: RootState) => state)

  useEffect(() => {
    const elements = document.getElementsByClassName(theme)
    if (elements.length > 0) {
      elements[0].scrollTop = 0
    }
  }, [path, theme])

  return null
}

export default ScrollToTopContainer
