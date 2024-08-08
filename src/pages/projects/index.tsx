import { ReactElement, useEffect } from 'react'

import { UserGithub } from '@/@types/models/github.model'
import { ProjectRepository } from '@/@types/models/projects.model'
import { CardGithubProject } from '@/components/CardGithubProject'
import { RevalidateTime } from '@/enums/RevalidateTime'
import { createUUID } from '@/helpers/createUUID'
import { Default } from '@/layouts/Default'
import {
  getLanguagesByRepository,
  getRepositoriesByUser,
  getUserAuthenticated,
} from '@/services/octokit.service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import * as S from './projects.css'

interface ProjectsProps {
  environment: string
  bernardoSemiOficial: UserGithub
  repositories: ProjectRepository[]
  languages: Record<string, number>
}

const Projects = ({
  bernardoSemiOficial,
  repositories,
  languages,
}: ProjectsProps) => {
  // const getUsersAuthenticated = async () => {
  //   const username = 'BernardoSemiOficial'
  //   const data = await getUserAuthenticated()
  //   const repositories = await getRepositoriesByUser(username)
  //   console.log('data', data, repositories)
  // }

  useEffect(() => {
    console.log({ bernardoSemiOficial, repositories, languages })
  }, [])

  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <section className={S.projects}>
          <h1 className={S.projectsTitle}>Projetos</h1>
          <ul className={S.githubProjects}>
            {/* {Array.from({ length: 5 }).map(() => (
              <li className={S.githubProjectItem} key={createUUID()}>
                <CardGithubProject />
              </li>
            ))} */}
            {repositories?.map(repository => (
              <li className={S.githubProjectItem} key={createUUID()}>
                <CardGithubProject {...repository} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  )
}

interface GetStaticProps {
  locale: string
}

export async function getStaticProps({ locale }: GetStaticProps) {
  const data = await getUserAuthenticated()
  const repositories = await getRepositoriesByUser()
  const languages = await getLanguagesByRepository({
    name: repositories[0].name,
  })

  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      bernardoSemiOficial: data,
      repositories,
      languages,
      ...(await serverSideTranslations(locale ?? 'pt', ['common'])),
    },
    revalidate: RevalidateTime['24Hours'],
  }
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Projects
