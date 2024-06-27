import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Contact = () => {
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

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Contact
