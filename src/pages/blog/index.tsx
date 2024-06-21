import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface BlogProps {
  locale: string
  environment: string
}

const Blog = () => {
  return <UnderConstruction />
}

export async function getStaticProps({ locale }: BlogProps) {
  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      ...(await serverSideTranslations(locale ?? 'pt', ['common'])),
    },
  }
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Blog
