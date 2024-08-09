import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import photoBernardo from 'public/assets/photo-bernardo.jpg'

import * as S from './logo.css'

interface LogoImage {
  w: number
  h: number
  quality: number
}

export const LogoImage = ({ w, h, quality }: LogoImage) => {
  const { t } = useTranslation('common')
  return (
    <Image
      priority
      src={photoBernardo}
      alt={t('labels.common.logoImage')}
      title={t('labels.common.logoImage')}
      objectFit='cover'
      width={w}
      height={h}
      quality={quality}
    />
  )
}

export const Logo = () => {
  return (
    <Link href='/' passHref>
      <button className={S.linkImage}>
        <figure className={S.photo}>
          <LogoImage w={52} h={52} quality={100}></LogoImage>
        </figure>
        <h1 className={S.name} translate='no'>
          Bernardo Pereira
        </h1>
      </button>
    </Link>
  )
}
