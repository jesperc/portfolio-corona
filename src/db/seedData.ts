import { Data, Tag, Project, TagId, ProjectId, Link } from './models'

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
    { id: TagId.sqlServer, name: 'Sql Server', sortOrder: 11 } as Tag,
    { id: TagId.redux, name: 'Redux', sortOrder: 10 } as Tag,
    { id: TagId.nodeJs, name: 'Node.js', sortOrder: 6 } as Tag,
    { id: TagId.javaSe, name: 'Java SE', sortOrder: 12 } as Tag,
    { id: TagId.android, name: 'Android', sortOrder: 13 } as Tag,
  ]

  const projects: Project[] = [
    {
      id: ProjectId.academicWork,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) => [TagId.vue, TagId.react].includes(tag.id)),
      duration: '2 years',
    } as Project,
    {
      id: ProjectId.myBazar,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) => [TagId.vue, TagId.react].includes(tag.id)),
      duration: '2 years',
    } as Project,
    {
      id: ProjectId.highCoastWhisky,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) => [TagId.vue, TagId.react].includes(tag.id)),
      duration: '2 years',
    } as Project,
    {
      id: ProjectId.thorengruppen,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) => [TagId.vue, TagId.react].includes(tag.id)),
      duration: '2 years',
    } as Project,
    {
      id: ProjectId.agency9,
      title: 'Academic Work',
      description: 'desc',
      technicalDescription: 'tech desc',
      technologies: ['React 15'],
      links: [{ text: 'click here', url: 'http://aftonbladet.se' } as Link],
      images: [''],
      tags: tags.filter((tag) => [TagId.vue, TagId.react].includes(tag.id)),
      duration: '2 years',
    } as Project,
  ]

  return {
    tags,
    projects,
  } as Data
}

export default seedData
