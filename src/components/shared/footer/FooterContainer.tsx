import React from 'react'
import './footer.scss'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GithubIcon from '@material-ui/icons/GitHub'

const FooterContainer: React.FC = () => {
  const copyrightSymbol = '\u00a9'
  const fullYear = new Date().getFullYear()
  const linkedInUrl = 'https://www.linkedin.com/in/jesper-corell-3656372b/'
  const githubUrl = 'https://github.com/jesperc'

  return (
    <div className="centered">
      <div className="footer">
        <div className="text">
          {`Made by Jesper Corell ${copyrightSymbol} ${fullYear}`}
          <span className="icons">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="icon footer-icon" />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="icon footer-icon github-icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterContainer
