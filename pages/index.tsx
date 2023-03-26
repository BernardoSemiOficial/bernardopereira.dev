import { ReactElement } from 'react'

import { Default } from '../src/layouts/Default'
import styles from '../styles/Home.module.css'
import type { NextPageWithLayout } from './_app'

const Home: NextPageWithLayout = () => {
  return <div className={styles.container}>hello world</div>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Home
