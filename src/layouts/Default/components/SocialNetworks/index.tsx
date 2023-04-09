import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import { LinkBase } from '@/components/LinkBase'
import { LabelsSocialNetworks } from '@/enums/Labels'
import { LinkGeneral } from '@/enums/LinksGeneral'

import * as S from './socialNetworks.css'

export const SocialNetworks = () => {
  return (
    <div className={S.socialNetworks}>
      <LinkBase
        variant={{ color: 'black', style: 'default' }}
        title={LabelsSocialNetworks.VISIT_MY_GITHUB}
        href={LinkGeneral.GITHUB_BERNARDO_SEMI_OFICIAL}
        newTab={true}
      >
        <AiFillGithub size={25} />
      </LinkBase>
      <LinkBase
        variant={{ color: 'black', style: 'default' }}
        title={LabelsSocialNetworks.VISIT_MY_LINKEDIN}
        href={LinkGeneral.LINKEDIN_BERNARDO}
        newTab={true}
      >
        <FaLinkedinIn size={25} />
      </LinkBase>
    </div>
  )
}
