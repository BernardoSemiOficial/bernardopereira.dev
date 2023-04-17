import { ReactElement } from 'react'

import { UnderConstruction } from '@/components/UnderConstruction'
import { Default } from '@/layouts/Default'

const Contact = () => {
  return <UnderConstruction />
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Default>{page}</Default>
}

export default Contact
