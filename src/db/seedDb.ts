import { Db, Tag, Project, TagType, ProjectType } from './models'

const seedDb = (): Db => {
  const tags: Tag[] = [
    { type: TagType.dotNet, name: '.NET' } as Tag,
    { type: TagType.dotNetCore, name: '.NET Core' } as Tag,
    { type: TagType.react, name: 'React' } as Tag,
    { type: TagType.reactNative, name: 'React Native' } as Tag,
    { type: TagType.vue, name: 'Vue' } as Tag,
    { type: TagType.typeScript, name: 'TypeScript' } as Tag,
    { type: TagType.javaScript, name: 'Javascript' } as Tag,
    { type: TagType.angular, name: 'Angular' } as Tag,
    { type: TagType.sqlServer, name: 'Sql Server' } as Tag,
    { type: TagType.redux, name: 'Redux' } as Tag,
    { type: TagType.nodeJs, name: 'Node.js' } as Tag,
    { type: TagType.javaSe, name: 'Java SE' } as Tag,
    { type: TagType.postgreSql, name: 'Postgre SQL' } as Tag,
    { type: TagType.android, name: 'Android' } as Tag,
  ]
  const projects: Project[] = [
    {
      type: ProjectType.academicWork,
      title: 'Academic Work',
      description: '',
      technicalDescription: '',
      technologies: [],
      links: [],
      images: [''],
      tags: tags.filter((tag) => tag.type === TagType.vue),
      duration: '2 years',
    } as Project,
  ]
  return {
    name: 'Jesper Corell',
    title: 'System Developer',
    tags,
    projects,
  } as Db
}

export default seedDb
