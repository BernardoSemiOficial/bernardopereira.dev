import { ReactElement, useEffect } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'
import { octokit } from '@/services/octokit'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Projects = () => {
  const getUsersAuthenticated = async () => {
    const {
      data: { login },
    } = await octokit.rest.users.getAuthenticated()
    console.log('Hello, %s', login)
  }

  useEffect(() => {
    getUsersAuthenticated()
  }, [])

  return <UnderConstruction />
}

interface GetStaticProps {
  locale: string
}

export async function getStaticProps({ locale }: GetStaticProps) {
  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      ...(await serverSideTranslations(locale ?? 'pt', ['common'])),
    },
  }
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Projects
