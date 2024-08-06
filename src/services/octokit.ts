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

export const getUserAuthenticated = async () => {
  return await octokit.rest.users.getAuthenticated()
}

export const getRepositoriesByUser = async (username: string) => {
  return await octokit.request('GET /users/{username}/repos', {
    username,
    ...headers,
  })
}
