import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import photoBernardo from 'public/assets/photo-bernardo.jpg'

import * as S from './logo.css'

export const Logo = () => {
  const { t } = useTranslation('common')
  return (
    <Link href='/' passHref>
      <button className={S.linkImage}>
        <figure className={S.photo}>
          <Image
            priority
            src={photoBernardo}
            alt={t('labels.common.logoImage')}
            title={t('labels.common.logoImage')}
            objectFit='cover'
            width={52}
            height={52}
            quality={100}
          />
        </figure>
        <h1 className={S.name} translate='no'>
          Bernardo Pereira
        </h1>
      </button>
    </Link>
  )
}
