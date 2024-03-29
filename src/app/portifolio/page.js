import Demonstracao from "../components/conteudos/portifolio"

import devPage from '../../../public/projetos/devpage.png'
import switchImage from '../../../public/projetos/switch.png'
import devLinks from '../../../public/projetos/devLinks.png'
import pesquisa from '../../../public/projetos/pesquisa.png'
import uniceplac from '../../../public/uniceplac.png'


export default function Portifolio() {
  return (

    <div className="flex-1 pt-4 pb-6 pr-5">
      <div className="flex flex-wrap items-center justify-center gap-10">
        <Demonstracao linkPage={"https://dev-eduardohrq.vercel.app"} linkRepo={"https://github.com/EduardoHrq/dev"} imagem={devPage} projeto={'dev'} />
        <Demonstracao linkPage={"https://eduardohrq-devlinks.vercel.app"} linkRepo={"https://github.com/EduardoHrq/links-next13"} imagem={devLinks} projeto={'links-next13'} />
        <Demonstracao linkPage={"https://switch-button-react.vercel.app"} linkRepo={"https://github.com/EduardoHrq/Switch-button-react"} imagem={switchImage} projeto={'Switch-button-react'} />
        <Demonstracao linkPage={"https://eduardohrq.github.io/input_pesquisa/"} linkRepo={"https://github.com/EduardoHrq/input_pesquisa"} imagem={pesquisa} projeto={'input_pesquisa'} />
        <Demonstracao linkPage={"https://github.com/EduardoHrq/projetos_da_faculdade"} linkRepo={"https://github.com/EduardoHrq/projetos_da_faculdade"} imagem={uniceplac} projeto={'Projetos_da_faculdade'} />
      </div>
    </div>
  )
}