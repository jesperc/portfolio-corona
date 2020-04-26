import React from 'react'
import './section.scss'
import { Link } from '../../../db/models'
import HomeIcon from '@material-ui/icons/Link'

export interface SectionContainerProps {
  header: string
  links?: Link[]
  paragraphs?: string[]
  list?: string[]
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  header,
  links,
  paragraphs,
  list: bulletList,
}) => {
  const renderLinks = links && links.length > 0
  const renderParagraphs = paragraphs && paragraphs.length > 0
  const renderList = bulletList && bulletList.length > 0

  return (
    <div className="section">
      <h4 className="header">{header}</h4>
      {renderParagraphs && (
        <div className="paragraphs">
          {paragraphs?.map((text: string) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      )}
      {renderLinks && (
        <div className="links">
          {links?.map((link: Link) => (
            <a
              key={link.url}
              className="link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <HomeIcon className="icon link-icon" />
              {link.text}
            </a>
          ))}
        </div>
      )}
      {renderList && (
        <div className="list">
          {bulletList?.map((text: string) => (
            <div className="item" key={text}>
              {text}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SectionContainer
