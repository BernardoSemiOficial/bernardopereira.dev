import { LinkBase } from '@/components/LinkBase'
import { LabelsCompanies } from '@/enums/Labels'
import { LinkGeneral } from '@/enums/LinksGeneral'

import * as S from './about.css'

export const About = () => {
  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <p className={S.paragraph}>
          Trabalho atualmente como Desenvolvedor Front-end Pleno na{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_ACCOUNTFY}
            href={LinkGeneral.ACCOUNTFY_HOME_PAGE}
            newTab={true}
          >
            Accountfy
          </LinkBase>
          .
        </p>
        <p className={S.paragraph}>
          Atualmente venho trabalhando com as principais bibliotecas e
          frameworks do mercado de Front-End: ReactJS, NextJS, VueJS, Angular e
          RxJS. Realizo a criação de testes unitários, utilização de typescript
          na maioria dos projetos. Já utilizei estilização com css puro, SCSS,
          styled-components, vanilha extract.
        </p>
        <p className={S.paragraph}>
          Conheço também do universo do Back-End, começei a trabalhar com
          NodeJS, criando servidores HTTP, criação de tarefas com cron job e
          manipulação/interação com Banco de dados (PostgresSQL).
        </p>
        <p className={S.paragraph}>
          Tenho bacharel em Sistemas de Informação na{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_FIAP}
            href={LinkGeneral.FIAP_HOME_PAGE}
            newTab={true}
          >
            FIAP
          </LinkBase>{' '}
          (Faculdade de Informática e Administração), onde ganhei uma bolsa de
          estudo de 100% dos valores pagos. Além disso, formado em técnico em
          Informática para Internet na instituição{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_ETEC_PQ_BELEM}
            href={LinkGeneral.ETEC_PQ_BELEM_HOME_PAGE}
            newTab={true}
          >
            ETEC Parque Belém
          </LinkBase>{' '}
          desde dezembro de 2018.
        </p>
        <p className={S.paragraph}>
          Minha paixão por desenvolvimento web, minha abordagem colaborativa e
          meu desejo de aprender continuamente me impulsionam a buscar
          excelência na criação de soluções digitais de alta qualidade.
        </p>
        <p className={S.paragraph}>
          Estou ansioso para continuar minha jornada de crescimento
          profissional, aprimorando minhas habilidades e contribuindo para
          projetos inovadores. Vamos conectar e explorar oportunidades de
          colaboração.
        </p>
      </div>
    </section>
  )
}
