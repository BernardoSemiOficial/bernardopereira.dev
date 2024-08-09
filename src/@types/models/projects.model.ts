import { RespositoryLanguageGithub } from './github.model'

export type ProjectRepository = {
  id: number
  private: boolean
  url: string
  name: string
  language: string
  languages: RespositoryLanguageGithub
  fork: boolean
  description: string | null
  createdAt: Date
  owner: {
    login: string
    url: string
    type: string
  }
}
