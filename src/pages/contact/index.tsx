import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface ContactProps {
  locale: string
  environment: string
}

const Contact = () => {
  return <UnderConstruction />
}

export async function getStaticProps({ locale }: ContactProps) {
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
