import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'

const Projects = () => {
  return <UnderConstruction />
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Projects
