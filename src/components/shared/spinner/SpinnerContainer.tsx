import React from 'react'
import { spinnerImage } from '../../../resources/images'
import './spinner.scss'

export interface SpinnerProps {
  style?: any
}

const Spinner: React.FC<SpinnerProps> = ({ style }) => {
  return (
    <img alt="spinner" className="spinner" style={style} src={spinnerImage} />
  )
}

export default Spinner
