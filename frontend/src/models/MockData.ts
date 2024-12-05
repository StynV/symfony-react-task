// AI Generated models considering the big data

export interface MockData {
  label: string
  code: string
  id: number
  info: string
  btw?: null
  owner: Owner
  unanswered?: null
  createdAt: string
  updatedAt: string
  contacts?: null[] | null
  organisations?: null[] | null
  team?: null[] | null
  activeOfferRequest?: null
  avatar: string
  files: Files
  defaultSpecification: DefaultSpecification
  addresses?: null[] | null
  details?: null[] | null
  state: string
  autoNumbering: boolean
}

export interface Owner {
  user: string
  accountId: number
  organisation: string
}

export interface Files {
  cover?: null[] | null
}

export interface DefaultSpecification {
  canonical: boolean
  label: string
  description: string
  account: number
  organisation: Organisation
  accountName: string
  id: number
  articles?: ArticlesEntity[] | null
  tree?: TreeEntity[] | null
  allArticles?: null
  updatedAt: string
  projects?: number[] | null
  cover: Cover
  ownerDisplay: OwnerDisplay
}

export interface Organisation {
  label: string
  id: number
  addresses?: null[] | null
  cover: Cover1
  avatar: string
  contactTypes?: null[] | null
  contacts?: null[] | null
  name: string
  vatNumber: string
  website: string
  mainContactId?: null
  mainContactEmail?: null
  email: string
  creatorOrganisation?: null
  creatorOrganisationId?: null
  info: string
  canBeDeleted: boolean
}

export interface Cover1 {
  label: string
  id: number
  name?: null
  fullPath: string
  typeFile?: null
  fileName: string
  content: boolean
  contentParsed?: null
  number?: null
  crop?: null
  created: string
  updated: string
}

export interface ArticlesEntity {
  id: number
  value: number
  article_id: number
  number: string
  parent: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaultType?: string | null
  defaultUnit?: string | null
}

export interface TreeEntity {
  value?: number
  article_id?: number
  number?: string
  section?: string
  title?: string
  type?: string[] | null
  unit?: string[] | null
  defaultType?: string | null
  defaultUnit?: string | null
  id: string | number
  parent?: string | number
  children?: ChildrenEntity[] | null
}

export interface ChildrenEntity {
  value: number
  article_id: number
  number: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaultType?: string | null
  defaultUnit?: string | null
  id: string
  parent: string
  children?: ChildrenEntity1[] | null
}

export interface ChildrenEntity1 {
  value: number
  article_id: number
  number: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaulttype?: string | null
  defaultunit?: string | null
  id: string
  parent: string
  children?: ChildrenEntity2[] | null
}

export interface ChildrenEntity2 {
  value: number
  article_id: number
  number: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaulttype?: string | null
  defaultunit?: string | null
  id: string
  parent: string
  children?: ChildrenEntity3[] | null
}

export interface ChildrenEntity3 {
  value: number
  article_id: number
  number: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaulttype?: string | null
  defaultunit?: string | null
  id: string
  parent: string
  children?: ChildrenEntity4[] | null
}

export interface ChildrenEntity4 {
  value: number
  article_id: number
  number: string
  section: string
  title: string
  type?: string[] | null
  unit?: string[] | null
  defaultType?: string | null
  defaultUnit?: string | null
  id: string
  parent: string
}

export interface Cover {
  label: string
  id: number
  name?: null
  fullPath: string
  typeFile?: null
  fileName: string
  content: boolean
  contentParsed?: null[] | null
  number?: null
  crop?: null
  created: string
  updated: string
}

export interface OwnerDisplay {
  name: string
  image: string
}
