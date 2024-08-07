export type ProjectRepository = {
  private: boolean
  url: string
  name: string
  language: string
  languages: string[]
  fork: boolean
  description: string | null
  created_at: Date
}
