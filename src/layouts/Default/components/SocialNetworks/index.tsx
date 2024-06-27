import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

import { LinkBase } from '@/components/LinkBase'
import { LinkGeneral } from '@/enums/LinksGeneral'
import { useTranslation } from 'next-i18next'

import * as S from './socialNetworks.css'

export const SocialNetworks = () => {
  const { t } = useTranslation('common')
  return (
    <div className={S.socialNetworks}>
      <LinkBase
        variant={{ color: 'black', style: 'default' }}
        title={t('labels.socialNetwork.visitMyGithub')}
        href={LinkGeneral.GITHUB_BERNARDO_SEMI_OFICIAL}
        newTab={true}
      >
        <AiFillGithub size={25} />
      </LinkBase>
      <LinkBase
        variant={{ color: 'black', style: 'default' }}
        title={t('labels.socialNetwork.visitMyLinkedin')}
        href={LinkGeneral.LINKEDIN_BERNARDO}
        newTab={true}
      >
        <FaLinkedinIn size={25} />
      </LinkBase>
    </div>
  )
}
