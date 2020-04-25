import React from 'react'
import './resume.scss'
import Section from '../../../shared/section'

const ResumeContainer: React.FC = () => {
  return (
    <div className="resume">
      <h3>Resume</h3>
      <Section
        header="Cirruculum Vitae"
        links={[
          {
            url: 'https://dizz.se/resources/cv_corell_jesper_english.pdf',
            text: 'English',
          },
          {
            url: 'https://dizz.se/resources/cv_corell_jesper_swedish.pdf',
            text: 'Swedish',
          },
        ]}
      />
      <Section
        header="Diploma"
        links={[
          {
            url: 'https://dizz.se/resources/diploma_ltu.jpg',
            text: `Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)`,
          },
          {
            url: 'https://dizz.se/resources/diploma_powerhouse.jpg',
            text: 'Powerhouse, major in Computer Games Programming (Swedish)',
          },
        ]}
      />
      <Section
        header="Grades"
        links={[
          {
            url: 'https://dizz.se/resources/grades_ltu.jpg',
            text: `Luleå Tekniska Universitet, major in Computer Science and
            Engineering (Swedish)`,
          },
          {
            url: 'https://dizz.se/resources/grades_powerhouse.jpg',
            text: 'Powerhouse, major in Computer Games Programming (Swedish)',
          },
        ]}
      />
      <Section
        header="Miscellaneous"
        links={[
          {
            url: 'https://dizz.se/resources/review_internship_powerhouse.jpg',
            text: 'Review from internship at Lapland Studio',
          },
          {
            url: 'https://old.dizz.se/',
            text: 'Very old portfolio site with school projects',
          },
          {
            url: 'https://github.com/jesperc',
            text: 'github.com/jesperc',
          },
        ]}
      />
    </div>
  )
}

export default ResumeContainer
