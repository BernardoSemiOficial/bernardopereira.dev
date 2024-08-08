import { LinkGeneral } from '@/enums/LinksGeneral'

import { Chip } from '../Chip'
import { LinkBase } from '../LinkBase'
import { LogoImage } from '../Logo'
import * as S from './cardGithubProject.css'

export const CardGithubProject = () => {
  return (
    <article className={S.container}>
      <div className={S.header}>
        <ul className={S.listLanguages}>
          <li>
            <Chip
              label='Javascript'
              background='yellow'
              labelStyle='linkSmall'
              color='black'
            />
          </li>
          <li>
            <Chip
              label='React'
              background='yellow'
              labelStyle='linkSmall'
              color='black'
            />
          </li>
          <li>
            <Chip
              label='NestJS'
              background='yellow'
              labelStyle='linkSmall'
              color='black'
            />
          </li>
        </ul>
      </div>
      <div className={S.content}>
        <p className={S.title}>Angular Features v18</p>
        <p className={S.description}>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={S.footer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <figure className={S.authorPhoto}>
            <LogoImage w={40} h={40} quality={100}></LogoImage>
          </figure>
          <div className={S.projectInfo}>
            <strong className={S.authorName}>Bernardo</strong>
            <small className={S.createdAt}>25/07/2024</small>
          </div>
        </div>
        <LinkBase
          variant={{ color: 'yellow', style: 'underline' }}
          rel='noopener noreferrer'
          title={'teste'}
          href={LinkGeneral.ACCOUNTFY_HOME_PAGE}
          newTab={true}
        >
          Ver projeto
        </LinkBase>
      </div>
    </article>
  )
}
