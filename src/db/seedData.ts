import {
  Data,
  Tag,
  Project,
  TagId,
  ProjectId,
  Link,
  ProjectType,
} from './models'
import {
  projectAcademicWorkThumbnailImage,
  projectMyBazarThumbnailImage,
  projectHockeymagasinetThumbnailImageImage,
  projectHighCoastWhiskyThumbnailImageImage,
  projectThorengruppenThumbnailImageImage,
  projectAgency9ThumbnailImageImage,
} from '../resources/images'

const seedData = (): Data => {
  const tags: Tag[] = [
    { id: TagId.showAll, name: 'Show All', sortOrder: 1 } as Tag,
    { id: TagId.dotNet, name: '.NET', sortOrder: 3 } as Tag,
    { id: TagId.dotNetCore, name: '.NET Core', sortOrder: 2 } as Tag,
    { id: TagId.react, name: 'React', sortOrder: 7 } as Tag,
    { id: TagId.reactNative, name: 'React Native', sortOrder: 8 } as Tag,
    { id: TagId.vue, name: 'Vue', sortOrder: 9 } as Tag,
    { id: TagId.typeScript, name: 'TypeScript', sortOrder: 4 } as Tag,
    { id: TagId.javaScript, name: 'Javascript', sortOrder: 5 } as Tag,
    { id: TagId.sqlServer, name: 'SQL Server', sortOrder: 12 } as Tag,
    { id: TagId.redux, name: 'Redux', sortOrder: 10 } as Tag,
    { id: TagId.mobX, name: 'MobX', sortOrder: 11 } as Tag,
    { id: TagId.nodeJs, name: 'Node.js', sortOrder: 6 } as Tag,
    { id: TagId.javaSe, name: 'Java SE', sortOrder: 13 } as Tag,
    { id: TagId.android, name: 'Android', sortOrder: 14 } as Tag,
    { id: TagId.angular, name: 'Angular', sortOrder: 15 } as Tag,
    { id: TagId.postgreSql, name: 'PostgreSQL', sortOrder: 16 } as Tag,
    { id: TagId.jQuery, name: 'JQuery', sortOrder: 17 } as Tag,
    { id: TagId.GWT, name: 'GWT', sortOrder: 18 } as Tag,
  ]

  const projects: Project[] = [
    {
      id: ProjectId.academicWork,
      title: 'Academic Work',
      description: '',
      technicalDescription: '',
      technologies: [],
      links: [],
      tags: tags.filter((tag) =>
        [
          TagId.vue,
          TagId.react,
          TagId.nodeJs,
          TagId.dotNetCore,
          TagId.typeScript,
          TagId.sqlServer,
          TagId.redux,
        ].includes(tag.id)
      ),
      duration: 'Ongoing',
      thumbnail: projectAcademicWorkThumbnailImage,
      sortOrder: 0,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.myBazar,
      title: 'My Bazar',
      description: `MyBazar is a digital platform for local merchants and small entrepreneurs in Malaysia. This was one of my projects when working as a 
        consultant for Dohi.
        My task was to implement new features such as localization and social features for the web and the apps. 
        I was part of a small team of 3-4 developers and were located at Gamla Stan in Stockholm, Sweden.`,
      technicalDescription: `React, React-Native and TypeScript. With React we used Redux for state management. 
        For styling we used Semantic Ui. The back-end consists of Node.js and MySQL however i only worked on front-end in this project.`,
      technologies: [
        'React 16',
        'Semantic Ui',
        'Redux',
        'React Native',
        'TypeScript',
        'Locize',
        'Git',
        'Docker',
        'OS X',
        'Visual Studio Code',
      ],
      links: [
        {
          text: 'MyBazar digital platform',
          url: 'http://www.mybazar.com',
        } as Link,
      ],
      tags: tags.filter((tag) =>
        [
          TagId.react,
          TagId.reactNative,
          TagId.redux,
          TagId.typeScript,
        ].includes(tag.id)
      ),
      duration: '3 months',
      thumbnail: projectMyBazarThumbnailImage,
      sortOrder: 1,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.hockeyMagasinet,
      title: 'Hockeymagasinet',
      description: `Hockeymagasinet is a swedish news site for ice hockey. This was my "in between" project when I was working as a consultant for Dohi. 
        Dohi hosts several news sites and this was one of the systems i was going to manage. 
        My task was to create new minor features and improve quality and performance. The team consisted of two developers and a product owner`,
      technicalDescription: 'Angular and Node.js.',
      technologies: [
        'Angular 5',
        'Node.js',
        'TypeScript',
        'Git',
        'Windows 10',
        'Ubuntu',
        'Visual Studio Code',
      ],
      links: [
        {
          text: 'Hockeymagasinet',
          url: 'https://www.hockeymagasinet.com/home',
        } as Link,
      ],
      images: [''],
      tags: tags.filter((tag) =>
        [TagId.angular, TagId.nodeJs, TagId.typeScript].includes(tag.id)
      ),
      duration: '1 month',
      thumbnail: projectHockeymagasinetThumbnailImageImage,
      sortOrder: 2,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.highCoastWhisky,
      title: 'High Coast Whisky',
      description: `High Coast Whisky is a producer of whisky in the northern forests of Sweden. 
        They wanted to create a new web for their cask owners and they hired my employer Dohi Agency to develop the system and web. 
        My task was to create new features, fix bugs, manage integrations etc. 
        I was a part of a small team of 2-3 developers and a UX designer.`,
      technicalDescription: `React, TypeScript and .NET Core. 
        I also did some minor scripting in SQL. With React we used MobX for state management. For styling we used mainly Material-UI 
        and styled-components for all our component views. For the back-end we used .NET Core. 
        My work was mainly focused on back-end.`,
      technologies: [
        'React 15',
        'MobX',
        'Styled Components',
        'Material-ui',
        '.NET Core 1.1',
        'TypeScript',
        'PostgreSQL',
        'Git',
        'Visual Studio Code',
        'Windows 10',
        'Ubuntu',
      ],
      links: [
        {
          text: 'High Coast Whisky cask owner web',
          url: 'https://my.boxwhisky.se/',
        } as Link,
      ],
      tags: tags.filter((tag) =>
        [
          TagId.dotNetCore,
          TagId.react,
          TagId.mobX,
          TagId.typeScript,
          TagId.postgreSql,
        ].includes(tag.id)
      ),
      duration: '5 months',
      thumbnail: projectHighCoastWhiskyThumbnailImageImage,
      sortOrder: 3,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.thorengruppen,
      title: 'Thorengruppen',
      description: `Thorengruppen is a company in the education business which owns around 30 high schools in Sweden. 
        My task was to manage and improve the school platform called Progress. I was a part of a small team of 3-4 developers.`,
      technicalDescription: `Mainly .NET MVC, Javascript and JQuery. 
        I also did some scripting in SQL for debugging and various fixes. All the views are rendered in the .NET MVC back-end, 
        the views were created using Razor. JQuery was used in most cases but there are some rare occurences where AngularJs was used. 
        For styling we used Bootstrap.`,
      technologies: [
        '.NET MVC 5',
        'JavaScript',
        'JQuery',
        'SQL Server Management Studio',
        'Razor',
        'Bootstrap',
        'Git ',
        'Sharepoint',
        'Visual Studio',
        'Windows 10',
      ],
      links: [],
      tags: tags.filter((tag) =>
        [
          TagId.dotNet,
          TagId.jQuery,
          TagId.javaScript,
          TagId.sqlServer,
          TagId.android,
        ].includes(tag.id)
      ),
      duration: '1 year, 7 months',
      thumbnail: projectThorengruppenThumbnailImageImage,
      sortOrder: 4,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.agency9,
      title: 'Agency 9',
      description: `Agency9 is a leading provider of web and mobile solutions for 3D visualization of geographic information and maps for collaboration and communication. 
        My task was to improve the content pipeline by creating a parser for the 3D format COLLADA. 
        This was originally my bachelor thesis and I got hired after my graduation in order to improve and finish the project. 
        I was a part of a small team of 4-5 developers and were located at Porsön in Luleå.`,
      technicalDescription: `I mainly worked with Java SE 8 and Google Web Toolkit (GWT). 
        GWT is an open source set of tools that allows web developers to create and maintain complex JavaScript front-end applications in Java. 
        In order for my parser to work with the Agency9's 3D engine I had to convert my parser in Java to Javascript. 
        The purpose was to have a parser on the client side which could support dragging and dropping a COLLADA file into the browser 
        which parses and creates a 3D model which can then be used in their engine.`,
      technologies: [
        'Java SE 8',
        'Google Web Toolkit',
        'JavaScript',
        'Git',
        'Aalto XML Parser',
        'Eclipse',
        'OS X',
      ],
      links: [{ text: 'Agency9', url: 'https://agency9.com/' } as Link],
      tags: tags.filter((tag) =>
        [TagId.javaSe, TagId.GWT, TagId.javaScript].includes(tag.id)
      ),
      duration: '7 months',
      thumbnail: projectAgency9ThumbnailImageImage,
      sortOrder: 5,
      type: ProjectType.work,
    } as Project,
    {
      id: ProjectId.agency9,
      title: 'Agency 9',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      tags: tags.filter((tag) =>
        [TagId.javaSe, TagId.GWT, TagId.javaScript].includes(tag.id)
      ),
      duration: '7 months',
      thumbnail: projectAgency9ThumbnailImageImage,
      sortOrder: 5,
      type: ProjectType.hobby,
    } as Project,
  ]

  return {
    tags,
    projects,
  } as Data
}

export default seedData
