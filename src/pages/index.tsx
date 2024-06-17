import { ReactElement } from 'react'

import { About } from '@/layouts/Default/components/About'
import { Hero } from '@/layouts/Default/components/Hero'
import { SocialNetworks } from '@/layouts/Default/components/SocialNetworks'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Default } from '../layouts/Default'

interface HomeProps {
  locale: string
  environment: string
}

const Home = ({ environment }: HomeProps) => {
  // eslint-disable-next-line no-console
  console.log('process.env.ENVIRONMENT', environment)

  return (
    <>
      <Hero />
      <SocialNetworks />
      <About />
      <SocialNetworks />
    </>
  )
}

export async function getStaticProps({ locale }: HomeProps) {
  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
