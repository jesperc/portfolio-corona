import React from 'react'
import './footer.scss'

const FooterContainer: React.FC = () => {
  const copyrightSymbol = '\u00a9'
  const fullYear = new Date().getFullYear()

  return (
    <div className="centered">
      <div className="footer">{`Made by Jesper Corell ${copyrightSymbol} ${fullYear}`}</div>
    </div>
  )
}

export default FooterContainer
