import { ReactElement } from 'react'

import { Default } from '../layouts/Default'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <p>hello world</p>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
