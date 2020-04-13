export type Db = {
  name: string
  title: string
  projects: Project[]
  tags: Tag[]
}

export type Link = {
  text: string
  url: string
}

export type Tag = {
  type: TagType
  name: string
}

export enum TagType {
  dotNet,
  dotNetCore,
  react,
  reactNative,
  vue,
  typeScript,
  javaScript,
  angular,
  sqlServer,
  redux,
  nodeJs,
  javaSe,
  postgreSql,
  android,
}

export type Project = {
  type: ProjectType
  title: string
  description: string
  technicalDescription: string
  technologies: string[]
  links: Link[]
  images: string[]
  tags: Tag[]
  duration: string
}

export enum ProjectType {
  academicWork,
  myBazar,
  hockeymagasinet,
  highCoastWhisky,
  thorengruppen,
  agency9,
}
