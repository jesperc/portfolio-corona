import { Data, Tag, Project, TagId, ProjectId, Link } from './models'
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
    { id: TagId.sqlServer, name: 'Sql Server', sortOrder: 12 } as Tag,
    { id: TagId.redux, name: 'Redux', sortOrder: 10 } as Tag,
    { id: TagId.mobX, name: 'MobX', sortOrder: 11 } as Tag,
    { id: TagId.nodeJs, name: 'Node.js', sortOrder: 6 } as Tag,
    { id: TagId.javaSe, name: 'Java SE', sortOrder: 13 } as Tag,
    { id: TagId.android, name: 'Android', sortOrder: 14 } as Tag,
    { id: TagId.angular, name: 'Angular', sortOrder: 15 } as Tag,
    { id: TagId.postgreSql, name: 'PostgreSql', sortOrder: 16 } as Tag,
    { id: TagId.jQuery, name: 'JQuery', sortOrder: 17 } as Tag,
    { id: TagId.GWT, name: 'GWT', sortOrder: 18 } as Tag,
  ]

  const projects: Project[] = [
    {
      id: ProjectId.academicWork,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [projectAcademicWorkThumbnailImage],
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
    } as Project,
    {
      id: ProjectId.myBazar,
      title: 'My Bazar',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
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
    } as Project,
    {
      id: ProjectId.hockeyMagasinet,
      title: 'Hockeymagasinet',
      description: 'desc',
      technicalDescription: '1 month',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) =>
        [TagId.angular, TagId.nodeJs, TagId.typeScript].includes(tag.id)
      ),
      duration: '1 month',
      thumbnail: projectHockeymagasinetThumbnailImageImage,
      sortOrder: 2,
    } as Project,
    {
      id: ProjectId.highCoastWhisky,
      title: 'High Coast Whisky',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
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
    } as Project,
    {
      id: ProjectId.thorengruppen,
      title: 'Thorengruppen',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
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
    } as Project,
    {
      id: ProjectId.agency9,
      title: 'Agency 9',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) =>
        [TagId.javaSe, TagId.GWT, TagId.javaScript].includes(tag.id)
      ),
      duration: '7 months',
      thumbnail: projectAgency9ThumbnailImageImage,
      sortOrder: 5,
    } as Project,
  ]

  return {
    tags,
    projects,
  } as Data
}

export default seedData
