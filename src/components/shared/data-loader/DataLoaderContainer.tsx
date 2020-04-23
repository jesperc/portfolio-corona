import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { fetchData } from '../../../redux/actions'

const DataLoaderContainer: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return null
}

export default DataLoaderContainer
