import React from 'react'
import './footer.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const FooterContainer: React.FC = () => {
  const copyrightSymbol = '\u00a9'
  const fullYear = new Date().getFullYear()
  const linkedInUrl = 'https://www.linkedin.com/in/jesper-corell-3656372b/'

  return (
    <div className="centered">
      <div className="footer">
        <div className="text">
          {`Made by Jesper Corell ${copyrightSymbol} ${fullYear}`}
          <a href={linkedInUrl}>
            <LinkedInIcon className="icon footer-icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FooterContainer
