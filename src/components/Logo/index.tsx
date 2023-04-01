import Image from 'next/image'
import Link from 'next/link'
import photoBernardo from 'public/assets/photo-bernardo.jpeg'

import * as S from './logo.css'

export const Logo = () => {
  return (
    <Link href='/'>
      <figure className={S.container}>
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
        <h1 className={S.name}>Bernardo Pereira</h1>
      </figure>
    </Link>
  )
}
