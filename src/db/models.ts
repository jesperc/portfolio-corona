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
  typeScript,
  javaScript,
  sqlServer,
  redux,
  nodeJs,
  javaSe,
  android,
}

export type Project = {
  id: ProjectId
  title: string
  description: string
  technicalDescription: string
  technologies: string[]
  links: Link[]
  images: string[]
  thumbnail: string
  tags: Tag[]
  duration: string
}

export enum ProjectId {
  academicWork,
  myBazar,
  highCoastWhisky,
  thorengruppen,
  agency9,
}
