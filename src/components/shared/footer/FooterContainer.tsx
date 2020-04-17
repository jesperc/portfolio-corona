import React from 'react'
import './footer.scss'

export interface FooterContainerProps {}

const FooterContainer: React.FC<FooterContainerProps> = ({}) => {
  const copyrightSymbol = '\u00a9'
  const fullYear = new Date().getFullYear()

  return (
    <div className="footer">{`Made by Jesper Corell ${copyrightSymbol} ${fullYear}`}</div>
  )
}

export default FooterContainer
