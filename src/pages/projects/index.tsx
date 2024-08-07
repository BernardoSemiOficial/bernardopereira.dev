import { ReactElement, useEffect } from 'react'

import { RepositoryGithub, UserGithub } from '@/@types/models/github.model'
import { UnderConstruction } from '@/components/UnderConstruction'
import { RevalidateTime } from '@/enums/RevalidateTime'
import { Default } from '@/layouts/Default'
import { getRepositoriesByUser, getUserAuthenticated } from '@/services/octokit'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface ProjectsProps {
  environment: string
  bernardoSemiOficial: UserGithub
  repositories: RepositoryGithub
}

const Projects = ({ bernardoSemiOficial, repositories }: ProjectsProps) => {
  // const getUsersAuthenticated = async () => {
  //   const username = 'BernardoSemiOficial'
  //   const data = await getUserAuthenticated()
  //   const repositories = await getRepositoriesByUser(username)
  //   console.log('data', data, repositories)
  // }

  useEffect(() => {
    console.log(bernardoSemiOficial, repositories)
  }, [])

  return <UnderConstruction />
}

interface GetStaticProps {
  locale: string
}

export async function getStaticProps({ locale }: GetStaticProps) {
  const data = await getUserAuthenticated()
  const repositories = await getRepositoriesByUser()

  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      bernardoSemiOficial: data,
      repositories,
      ...(await serverSideTranslations(locale ?? 'pt', ['common'])),
    },
    revalidate: RevalidateTime['24Hours'],
  }
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Projects
