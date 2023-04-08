import * as S from './hero.css'

export const Hero = () => {
  return (
    <section className={S.container}>
      <div className={S.wrapper}>
        <div className={S.apresentation}>
          <p>Olá, pessoal!</p>
          <p>
            Sou o <span className={S.name}>Bernardo Pereira</span>
          </p>
          <p>Desenvolvedor Front-End</p>
        </div>
        <div className={S.about}>
          <p>
            Este é o meu blog pessoal, que criei para compartilhar sobre minha
            carreira de desenvolvedor front-end.
          </p>
        </div>
      </div>
    </section>
  )
}
