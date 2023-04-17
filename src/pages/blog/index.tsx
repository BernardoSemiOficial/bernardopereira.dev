import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'

const Blog = () => {
  return <UnderConstruction />
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Blog
