import { LabelsTitles } from '@/enums/Labels'
import Image from 'next/image'
import Link from 'next/link'
import photoBernardo from 'public/assets/photo-bernardo.jpeg'

import * as S from './logo.css'

export const Logo = () => {
  return (
    <Link href='/' className={S.container}>
      <a className={S.linkImage}>
        <figure className={S.photo}>
          <Image
            priority
            src={photoBernardo}
            alt={LabelsTitles.LOGO_IMAGE_TITLE}
            title={LabelsTitles.LOGO_IMAGE_TITLE}
            objectFit='cover'
            width={52}
            height={52}
            quality={100}
          />
        </figure>
        <h1 className={S.name} translate='no'>
          Bernardo Pereira
        </h1>
      </a>
    </Link>
  )
}
