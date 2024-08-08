import { ProjectRepository } from '@/@types/models/projects.model'

import { Chip } from '../Chip'
import { LinkBase } from '../LinkBase'
import { LogoImage } from '../Logo'
import * as S from './cardGithubProject.css'

interface CardGithubProject extends ProjectRepository {}

export const CardGithubProject = ({
  languages,
  name,
  description,
  url,
  createdAt,
  owner,
}: CardGithubProject) => {
  const languagesKeys = Object.keys(languages)
  return (
    <article className={S.container}>
      <div className={S.header}>
        <ul className={S.listLanguages}>
          {languagesKeys?.map(language => (
            <li key={language}>
              <Chip
                label={language}
                background='yellow'
                font='textCaption'
                color='black'
              />
            </li>
          ))}
          {/* <li>
            <Chip
              label='Javascript'
              background='yellow'
              font='textCaption'
              color='black'
            />
          </li>
          <li>
            <Chip
              label='React'
              background='yellow'
              font='textCaption'
              color='black'
            />
          </li>
          <li>
            <Chip
              label='NestJS'
              background='yellow'
              font='textCaption'
              color='black'
            />
          </li> */}
        </ul>
      </div>
      <div className={S.content}>
        <p className={S.title}>{name}</p>
        <p className={S.description}>{description}</p>
      </div>
      <div className={S.footer}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <figure className={S.authorPhoto}>
            <LogoImage w={40} h={40} quality={100}></LogoImage>
          </figure>
          <div className={S.projectInfo}>
            <strong className={S.authorName}>
              {owner?.login ? owner.login : ''}
            </strong>
            <small className={S.createdAt}>
              {createdAt ? new Date(createdAt).toLocaleDateString('pt-BR') : ''}
            </small>
          </div>
        </div>
        <LinkBase
          variant={{ color: 'yellow', style: 'underline' }}
          rel='noopener noreferrer'
          title={'Clique para ver o projeto'}
          href={url || ''}
          newTab={true}
        >
          Ver projeto
        </LinkBase>
      </div>
    </article>
  )
}
