import './style.css'

import Pill from "../pills";

import uniceplac from '../../../../public/uniceplac.png'
import Image from "next/image";

export default function PageHome() {
  return (
    <div className="w-full h-full relative area">
      <div className="w-full h-full absolute front">
        <div className="w-full h-full bg-neutral-800 rounded-2xl px-5 relative">
          <div className="h-1/5 flex items-center">
            <h1 className="text-white font-bold text-5xl">Eduardo Henrique Lima Silva</h1>
          </div>
          <div className="flex">
            <div className="w-1/2 flex text-white">
              <div className="w-1/2 flex flex-col gap-5">
                <p className="font-bold text-center text-xl">SOBRE</p>
                <hr className="opacity-50 w-11/12" />

                <div>
                  <strong>Data de nascimento</strong>
                  <p>06 / 12 / 2002</p>
                </div>
                <div>
                  <strong>Idade</strong>
                  <p>20 anos</p>
                </div>
                <div>
                  <strong>Nacionalidade</strong>
                  <p>Brasileiro</p>
                </div>
                <div>
                  <strong>Genero</strong>
                  <p>Masculino</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-5">
                <p className="font-bold text-center text-xl">ENDEREÇO</p>
                <hr className="opacity-50 w-11/12" />
                <div>
                  <strong>Estado</strong>
                  <p>Goias</p>
                </div>
                <div>
                  <strong>Cidade</strong>
                  <p>Cidade Ocidental</p>
                </div>
                <div>
                  <strong>Proximo a</strong>
                  <p>Brasilia - DF</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-5">
              <p className="text-white text-center font-bold text-xl">SKILLS</p>
              <hr className="opacity-50" />

              <div className="flex gap-2 items-center justify-center flex-wrap px-5">
                <Pill title={"Scrum"} />
                <Pill title={"React"} />
                <Pill title={"Nextjs"} />
                <Pill title={"Tailwind"} />
                <Pill title={"Bootstrap"} />
                <Pill title={"Html - CSS"} />
                <Pill title={"JavaScript"} />
                <Pill title={"Git - GitHub"} />
                <Pill title={"Java"} />
                <Pill title={"Spring"} />
                <Pill title={"Python"} />
                <Pill title={"SQL"} />
                <Pill title={"Linux"} />
                <Pill title={"Inglês"} />
              </div>

              <p className="text-white text-center font-bold mt-3 text-xl">Algumas personalidades</p>
              <hr className="opacity-50" />

              <div className="flex gap-2 items-center justify-center flex-wrap px-5">
                <Pill title={"Lider"} />
                <Pill title={"Responsavel"} />
                <Pill title={"Comunicativo"} />
                <Pill title={"Criativo"} />
                <Pill title={"Empático"} />
                <Pill title={"Esforçado"} />
              </div>

            </div>
          </div>

          <div className='border border-dashed p-3 absolute text-white font-bold rounded-xl'>
            CLIQUE E SEGURE PARA VER O OUTRO LADO
          </div>

        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-7 text-zinc-300 bg-neutral-800 rounded-2xl px-5 py-5 absolute back">
        <div className="flex flex-col gap-3 text-white">
          <p className="font-bold text-xl">Formações</p>
          <hr className="opacity-50" />
          <div className="flex gap-5">
            <Image src={uniceplac} width={100} />
            <div>
              <strong>Engenharia de software - UNICEPLAC</strong>
              <p><strong>Situação: </strong>Cursando</p>
              <p><strong>Inicio em: </strong>01 / 2021</p>
              <p><strong>Terminio em: </strong>12 / 2024</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-white">
          <p className="font-bold text-xl">Sobre mim</p>
          <hr className="opacity-50" />

          <div>
            <p className='text-justify text-white'>
              Me chamo Eduardo Henrique Lima Silva, tenho 20 anos, atualmente estou cursando engenharia de software na UNICEPLAC, gama - DF. Ainda sem contato com mercado de trabalho, porém através deste web site na qual uso para me auxiliar a encontrar emprego para começar minhas atividades profissionais, me colocando a disposição para colaborar com a empresa, onde poderei aprimorar as habilidades que através de estudos possuo. Assim dispondo resultados para a organização e para a sociedade, bem como, meu desenvolvimento pessoal e profissional. Tenho mais habilidades com códigos, com isso, me destaco com java, python, javascript, mas também entendo de front-end com html, css e frameworks. tenho conhecimentos acerca do SCRUM.
            </p>
          </div>
        </div>

      </div>


    </div>
  )
}