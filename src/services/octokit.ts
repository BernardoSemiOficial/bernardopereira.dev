import {
  OctokitGithub,
  RepositoryGithub,
  UserGithub,
} from '@/@types/models/github.model'
import { ProjectRepository } from '@/@types/models/projects.model'
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'
import { Octokit } from 'octokit'

const MyOctokit = Octokit.plugin(restEndpointMethods)

const octokit = new MyOctokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN,
})

const headers = {
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
}

export const getUserAuthenticated = async (): Promise<UserGithub | null> => {
  try {
    const request =
      (await octokit.rest.users.getAuthenticated()) as OctokitGithub<UserGithub>
    return request.data
  } catch (error) {
    console.error(error)
    return null
  }
}

export const getRepositoriesByUser = async (): Promise<ProjectRepository[]> => {
  try {
    const username = 'BernardoSemiOficial'
    const repositories = (await octokit.request('GET /users/{username}/repos', {
      username,
      ...headers,
    })) as OctokitGithub<RepositoryGithub[]>

    const filtredRepositories = repositories?.data?.filter(
      repository => !repository.private
    )

    const projectRepository: ProjectRepository[] = filtredRepositories.map(
      repository => ({
        languages: [],
        url: repository.url,
        fork: repository.fork,
        name: repository.name,
        private: repository.private,
        language: repository.language,
        created_at: repository.created_at,
        description: repository.description,
      })
    )

    return projectRepository
  } catch (error) {
    console.error(error)
    return []
  }
}
