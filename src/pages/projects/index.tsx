import { ReactElement } from 'react'

import { UserGithub } from '@/@types/models/github.model'
import { ProjectRepository } from '@/@types/models/projects.model'
import { CardGithubProject } from '@/components/CardGithubProject'
import { RevalidateTime } from '@/enums/RevalidateTime'
import { createUUID } from '@/helpers/createUUID'
import { Default } from '@/layouts/Default'
import {
  getLanguagesByRepositories,
  getRepositoriesByUser,
  getUserAuthenticated,
} from '@/services/octokit.service'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import * as S from './projects.css'

interface ProjectsProps {
  environment: string
  bernardoSemiOficial: UserGithub
  repositories: ProjectRepository[]
}

const Projects = ({ bernardoSemiOficial, repositories }: ProjectsProps) => {
  console.log({ bernardoSemiOficial, repositories })
  const { t } = useTranslation('common')

  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <section className={S.projects}>
          <h1 className={S.projectsTitle}>{t('projects.title')}</h1>
          <h1
            className={S.projectsDescription}
            dangerouslySetInnerHTML={{ __html: t('projects.description') }}
          ></h1>
          <ul className={S.githubProjects}>
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
  await getLanguagesByRepositories(repositories)

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
