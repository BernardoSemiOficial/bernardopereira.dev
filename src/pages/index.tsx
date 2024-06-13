import { ReactElement } from 'react'

import { About } from '@/layouts/Default/components/About'
import { Hero } from '@/layouts/Default/components/Hero'
import { SocialNetworks } from '@/layouts/Default/components/SocialNetworks'

import { Default } from '../layouts/Default'

interface HomeProps {
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

export async function getStaticProps() {
  return {
    props: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
