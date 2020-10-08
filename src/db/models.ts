export type Data = {
  projects: Project[]
  tags: Tag[]
}

export type Link = {
  text: string
  url: string
}

export type Tag = {
  id: TagId
  name: string
  sortOrder: number
}

export enum TagId {
  showAll,
  dotNet,
  dotNetCore,
  react,
  reactNative,
  vue,
  azure,
  typeScript,
  javaScript,
  sqlServer,
  redux,
  node,
  javaSe,
  android,
  angular,
  jQuery,
}

export type Project = {
  id: ProjectId
  title: string
  description: string
  technicalDescription: string
  techStack: string[]
  links: Link[]
  thumbnail: string
  tags: Tag[]
  duration: string
  sortOrder: number
  type: ProjectType
  disabled: boolean
}

export enum ProjectType {
  work = 'Work',
  hobby = 'Hobby',
}

export enum ProjectId {
  acneStudios,
  academicWork,
  myBazar,
  hockeyMagasinet,
  highCoastWhisky,
  thorengruppen,
  agency9,
  portfolio,
  wahlins,
  hidden,
}
