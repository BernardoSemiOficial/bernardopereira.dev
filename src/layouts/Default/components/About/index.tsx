import { LinkBase } from '@/components/LinkBase'
import { LabelsCompanies } from '@/enums/Labels'
import { LinkGeneral } from '@/enums/LinksGeneral'

import * as S from './about.css'

export const About = () => {
  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <p className={S.paragraph}>
          Trabalho atualmente como Desenvolvedor Front End Junior na{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_JSM}
            href={LinkGeneral.JSM_HOME_PAGE}
            newTab={true}
          >
            Juntos Somos Mais.
          </LinkBase>
        </p>
        <p className={S.paragraph}>
          Atualmente venho trabalhando com as principais bibliotecas e
          frameworks do mercado de Front-End: ReactJS, NextJS e VueJS. Realizo a
          criação de testes unitários, utilização de typescript na maioria dos
          projetos. Já utilizei estilização com css puro, SCSS,
          styled-components, vanilha extract.
        </p>
        <p className={S.paragraph}>
          Conheço também do universo do Back-End, começei a trabalhar com
          NodeJS, criando servidores HTTP, criação de tarefas com cron job e
          manipulação/interação com Banco de dados (PostgresSQL).
        </p>
        <p className={S.paragraph}>
          Na maioria dos meus projetos sempre procuro iniciar com o Typescript
          para garantir qualidade de código e reduzir erros comuns na tratativa
          dos dados nos projetos.
        </p>
        <p className={S.paragraph}>
          Sou formado em técnico em Informática para Internet na instituição{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_ETEC_PQ_BELEM}
            href={LinkGeneral.ETEC_PQ_BELEM_HOME_PAGE}
            newTab={true}
          >
            ETEC Parque Belém
          </LinkBase>{' '}
          desde dezembro de 2018. Atualmente, realizo uma graduação com bolsa em
          bacharelado de Sistemas de Informação na{' '}
          <LinkBase
            variant={{ color: 'yellow', style: 'underline' }}
            rel='noopener noreferrer'
            title={LabelsCompanies.VISIT_FIAP}
            href={LinkGeneral.FIAP_HOME_PAGE}
            newTab={true}
          >
            FIAP
          </LinkBase>{' '}
          (Faculdade de Informática e Administração) e estou no 7º semestre.
        </p>
      </div>
    </section>
  )
}
