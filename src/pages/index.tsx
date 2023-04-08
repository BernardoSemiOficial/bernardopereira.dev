import { ReactElement } from 'react'

import { About } from '@/layouts/Default/components/About'
import { Hero } from '@/layouts/Default/components/Hero'

import { Default } from '../layouts/Default'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
