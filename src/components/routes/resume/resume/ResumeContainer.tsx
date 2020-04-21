import React from 'react'
import './resume.scss'
import ResumeIcon from '@material-ui/icons/AccountBox'
import GradesIcon from '@material-ui/icons/FontDownload'
import MiscIcon from '@material-ui/icons/AcUnit'
import DiplomaIcon from '@material-ui/icons/CardMembership'

const ResumeContainer: React.FC = () => {
  return (
    <div className="resume">
      <h3>Resume</h3>
      <h4>
        <span className="icon">
          <ResumeIcon />
        </span>
        Cirruculum Vitae
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/cv_corell_jesper_english.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            English
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/cv_corell_jesper_swedish.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Svenska
          </a>
        </p>
      </div>
      <h4>
        <span className="icon">
          <DiplomaIcon />
        </span>
        Diploma
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/diploma_ltu.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/diploma_powerhouse.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powerhouse, major in Computer Games Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <span className="icon">
          <GradesIcon />
        </span>
        Grades
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/grades_ltu.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)
          </a>
        </p>
        <p>
          <a
            href="https://dizz.se/resources/grades_powerhouse.JPG"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powerhouse, major in Computer Games Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <span className="icon">
          <MiscIcon />
        </span>
        Miscellaneous
      </h4>
      <div className="links">
        <p>
          <a
            href="https://dizz.se/resources/review_internship_powerhouse.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review from internship at Lapland Studio
          </a>
        </p>
        <p>
          <a
            href="https://old.dizz.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Very old portfolio site with school projects
          </a>
        </p>
        <p>
          <a
            href="https://github.com/jesperc"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jesperc
          </a>
        </p>
      </div>
    </div>
  )
}

export default ResumeContainer
