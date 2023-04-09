import Image from 'next/image'
import Link from 'next/link'
import photoBernardo from 'public/assets/photo-bernardo.jpeg'

import * as S from './logo.css'

export const Logo = () => {
  return (
    <figure className={S.container}>
      <Link href='/'>
        <a className={S.link}>
          <Image
            priority
            className={S.photo}
            src={photoBernardo}
            alt='Foto de perfil do Bernardo'
            objectFit='cover'
            width={52}
            height={52}
            quality={100}
          />
          <h1 className={S.name} translate='no'>
            Bernardo Pereira
          </h1>
        </a>
      </Link>
    </figure>
  )
}
