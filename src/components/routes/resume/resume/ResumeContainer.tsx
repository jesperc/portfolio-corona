import React from 'react'
import './resume.scss'
import { homeIcon } from '../../../../resources/images'

export interface ResumeContainerProps {}

const ResumeContainer: React.FC<ResumeContainerProps> = ({}) => {
  return (
    <div className="resume">
      <h3>Resume</h3>
      <h4>
        <img src={homeIcon} width="20px" height="20px" />
        Cirruculum Vitae
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/cv_corell_jesper_english.pdf">
            English
          </a>
        </p>
        <p>
          <a href="https://dizz.se/resources/cv_corell_jesper_swedish.pdf">
            Svenska
          </a>
        </p>
      </div>
      <h4>
        <img src={homeIcon} width="20px" height="20px" />
        Diploma
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/diploma_ltu.jpg">
            Bachelor of Science with Major in Computer Science and Engineering
            (Swedish)
          </a>
        </p>
        <p>
          <a href="https://dizz.se/resources/diploma_powerhouse.jpg">
            Qualified Vocational Training with Major in Computer Games
            Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <img src={homeIcon} width="20px" height="20px" />
        Grades
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/grades_ltu.jpg">
            Bachelor of Science with Major in Computer Science and Engineering
            (Swedish)
          </a>
        </p>
        <p>
          <a href="https://dizz.se/resources/grades_powerhouse.JPG">
            Qualified Vocational Training with Major in Computer Games
            Programming (Swedish)
          </a>
        </p>
      </div>
      <h4>
        <img src={homeIcon} width="20px" height="20px" />
        Miscellaneous
      </h4>
      <div className="links">
        <p>
          <a href="https://dizz.se/resources/review_internship_powerhouse.jpg">
            Review from internship at Lapland Studio
          </a>
        </p>
        <p>
          <a href="https://old.dizz.se/">
            Very old portfolio site with school projects
          </a>
        </p>
        <p>
          <a href="https://github.com/jesperc">github.com/jesperc</a>
        </p>
      </div>
    </div>
  )
}

export default ResumeContainer
