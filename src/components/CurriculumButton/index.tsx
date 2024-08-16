import { LinkGeneral } from '@/enums/LinksGeneral'
import { useTranslation } from 'next-i18next'

import { Button } from '../Button'
import * as S from './curriculumButton.css'

export const CurriculumButton = () => {
  const { t } = useTranslation('common')
  return (
    <div className={S.curriculumButton}>
      <Button
        type='button'
        variant='link'
        title={t('curriculum.description')}
        onClick={() => window.open(LinkGeneral.CURRICULUM_PERSONAL, '_blank')}
      >
        {t('curriculum.title')}
      </Button>
    </div>
  )
}
