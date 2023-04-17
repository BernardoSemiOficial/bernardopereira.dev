import { LabelsTitles } from '@/enums/Labels'
import Image from 'next/image'
import { useRouter } from 'next/router'
import svgUnderConstruction from 'public/assets/under-construction.svg'

import { Button } from '../Button'
import * as S from './underConstruction.css'

export const UnderConstruction = () => {
  const router = useRouter()

  const handleGoToLastPage = () => {
    router.back()
  }

  return (
    <section className={S.container}>
      <figure className={S.alertContainerImage}>
        <Image
          objectFit='cover'
          width={300}
          height={300}
          quality={100}
          className={S.alertImage}
          src={svgUnderConstruction}
          alt={LabelsTitles.UNDER_CONSTRUCTION}
          title={LabelsTitles.UNDER_CONSTRUCTION}
        />
      </figure>
      <p className={S.alertTitle}>Página em construção</p>
      <p className={S.alertDescription}>Essa página está sendo desenvolvida,</p>
      <p className={S.alertDescription}>logo mais, você poderá vê-la.</p>
      <div className={S.actions}>
        <Button variant='primary' onClick={handleGoToLastPage}>
          Voltar para a página anterior
        </Button>
      </div>
    </section>
  )
}
