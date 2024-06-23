import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface ProjectsProps {
  locale: string
  environment: string
}

const Projects = () => {
  return (
    <>
      <UnderConstruction />
      {new Error('Teste')}
    </>
  )
}

export async function getStaticProps({ locale }: ProjectsProps) {
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
