import React from 'react'
import './section.scss'
import { Link } from '../../../db/models'

export interface SectionContainerProps {
  header: string
  links?: Link[]
  paragraphs?: string[]
  bulletList?: string[]
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  header,
  links,
  paragraphs,
  bulletList,
}) => {
  const renderLinks = links && links.length > 0
  const renderParagraphs = paragraphs && paragraphs.length > 0
  const renderBulletList = bulletList && bulletList.length > 0

  return (
    <div className="section">
      <h4 className="header">{header}</h4>
      {renderParagraphs && (
        <div className="paragraphs">
          {paragraphs?.map((text: string) => (
            <p>{text}</p>
          ))}
        </div>
      )}
      {renderLinks && (
        <div className="links">
          {links?.map((link: Link) => (
            <a
              className="link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
      {renderBulletList && (
        <div className="bullet-list">
          <ul>
            {bulletList?.map((text: string) => (
              <li className="item">{text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  // {renderLinks && (
  //   <div className="links">
  //     <div className="link">
  //       {}
  //       <a
  //         href="https://dizz.se/resources/cv_corell_jesper_english.pdf"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         English
  //       </a>
  //     </div>
  //     <div className="link">
  //       <a
  //         href="https://dizz.se/resources/cv_corell_jesper_swedish.pdf"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Svenska
  //       </a>
  //     </div>
  //   </div>
  // )}
}

export default SectionContainer
