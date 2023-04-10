import Image from 'next/image'
import './style.css'

import userImage from '../../../../public/eupng1.png'
import github from '../../../../public/github.png'
import linkedin from '../../../../public/linkedin.png'
import curriculo from '../../../../public/curriculo.png'
import home from '../../../../public/home.png'
import maleta from '../../../../public/maleta.png'
import certificados from '../../../../public/certificados.png'
import email from '../../../../public/email.png'
import Link from 'next/link'
import Botao from '../botao/botao'

export default function NavBar() {
  return (
    <div className="w-[360px] h-screen">
      <div className='nav w-[360px] fixed flex flex-col gap-3'>
        <div className='bloco flex flex-col justify-center items-center gap-3'>
          <div className='w-[120px] h-[120px] bg-indigo-500 bg-opacity-50 flex items-center justify-center rounded-full overflow-hidden outline outline-4 outline-neutral-300 outline-offset-4'>
            <Image src={userImage} width={100} height={50} />
          </div>
          <p className='font-bold text-white'>Eduardo Henrique</p>
        </div>

        <div className='bloco btts p-4 flex flex-col gap-4'>
          <Botao title={"Home"} toPage={"/"} image={home} />
          <Botao title={"Portifólio"} toPage={"/portifolio"} image={maleta} />
          <Botao title={"Certificados"} toPage={"/certificados"} image={certificados} />
          <Botao title={"E-mail"} toPage={"/email"} image={email} />
          <Botao title={"GitHub"} toPage={"/"} image={github} />
        </div>

        <div className='bloco flex gap-2 redes p-3'>
          <Link href='https://github.com/EduardoHrq' className='flex justify-center items-center p-3 rounded-2xl hover:bg-neutral-700  transition-colors duration-300'>
            <Image src={github} width={100} />
          </Link>

          <Link href='https://www.linkedin.com/in/eduardohrq/' className='flex justify-center items-center p-3 rounded-2xl hover:bg-neutral-700  transition-colors duration-300'>
            <Image src={linkedin} width={100} />
          </Link>

          <Link href='https://drive.google.com/file/d/1OmXaDgMr4drnz0xlmh5mvdx5n5StoBCJ/view?usp=sharing' className='flex justify-center items-center p-3 rounded-2xl hover:bg-neutral-700  transition-colors duration-300'>
            <Image src={curriculo} width={100} />
          </Link>
        </div>
      </div>
    </div>
  )
}