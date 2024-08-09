import {
  OctokitGithub,
  RepositoryGithub,
  RespositoryLanguageGithub,
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

const username = 'BernardoSemiOficial'

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
    const repositories = (await octokit.request('GET /users/{username}/repos', {
      username,
      ...headers,
    })) as OctokitGithub<RepositoryGithub[]>

    const filtredRepositories = repositories?.data?.filter(
      repository => !repository.private
    )

    const projectRepository: ProjectRepository[] = filtredRepositories.map(
      repository => ({
        languages: {},
        id: repository.id,
        url: repository.html_url,
        fork: repository.fork,
        name: repository.name,
        private: repository.private,
        language: repository.language,
        createdAt: repository.created_at,
        description: repository.description,
        owner: {
          login: repository.owner.login,
          url: repository.owner.html_url,
          type: repository.owner.type,
        },
      })
    )

    return projectRepository
  } catch (error) {
    console.error(error)
    return []
  }
}

export const getLanguagesByRepositories = async (
  repositories: ProjectRepository[]
) => {
  const languages = await Promise.all(
    repositories.map(async repository => {
      return await getLanguagesByRepository(repository)
    })
  )

  return languages
}

export const getLanguagesByRepository = async (
  repository: ProjectRepository
): Promise<void> => {
  try {
    const languages = (await octokit.request(
      'GET /repos/{owner}/{repo}/languages',
      {
        owner: username,
        repo: repository.name,
        ...headers,
      }
    )) as OctokitGithub<RespositoryLanguageGithub>

    if (Object.entries(languages.data).length)
      repository.languages = languages.data
  } catch (error) {
    console.error(error)
  }
}
