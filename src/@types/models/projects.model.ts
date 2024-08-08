export type ProjectRepository = {
  private: boolean
  url: string
  name: string
  language: string
  languages: string[]
  fork: boolean
  description: string | null
  createdAt: Date
  owner: {
    login: string
    url: string
    type: string
  }
}
