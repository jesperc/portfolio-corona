import React from 'react'
import './resume.scss'
import {
  cvIcon,
  diplomaIcon,
  gradesIcon,
  miscIcon,
} from '../../../../resources/images'

export interface ResumeContainerProps {}

const ResumeContainer: React.FC<ResumeContainerProps> = ({}) => {
  return (
    <div className="resume">
      <h3>Resume</h3>
      <h4>
        <img src={cvIcon} width="20px" height="20px" />
        Cirruculum Vitae
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/cv_corell_jesper_english.pdf"
            target="_blank"
          >
            English
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/cv_corell_jesper_swedish.pdf"
            target="_blank"
          >
            Svenska
          </a>
        </p>
      </div>
      <h4>
        <img src={diplomaIcon} width="20px" height="20px" />
        Diploma
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/diploma_ltu.jpg" target="_blank">
            Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/diploma_powerhouse.jpg"
            target="_blank"
          >
            Powerhouse, major in Computer Games Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <img src={gradesIcon} width="20px" height="20px" />
        Grades
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/grades_ltu.jpg" target="_blank">
            Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/grades_powerhouse.JPG"
            target="_blank"
          >
            Powerhouse, major in Computer Games Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <img src={miscIcon} width="20px" height="20px" />
        Miscellaneous
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/review_internship_powerhouse.jpg"
            target="_blank"
          >
            Review from internship at Lapland Studio
          </a>
        </p>
        <p>
          <a href="https://old.dizz.se/" target="_blank">
            Very old portfolio site with school projects
          </a>
        </p>
        <p>
          <a href="https://github.com/jesperc" target="_blank">
            github.com/jesperc
          </a>
        </p>
      </div>
    </div>
  )
}

export default ResumeContainer
