import { ReactElement, ReactNode } from 'react'

import { About } from '@/layouts/Default/components/About'
import { Hero } from '@/layouts/Default/components/Hero'
import { SocialNetworks } from '@/layouts/Default/components/SocialNetworks'

import { Default } from '../layouts/Default'

interface HomeProps {
  children: ReactNode
  environment: string
}

const Home = ({ environment }: HomeProps) => {
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
      environment: process.env.ENVIRONMENT,
    },
  }
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
