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
    <div className='nav flex flex-col gap-3'>
      <div className='bloco flex flex-col justify-center items-center gap-2'>
        <div className='w-36 h-36 bg-cyan-600 bg-opacity-50 flex items-center justify-center rounded-full overflow-hidden'>
          <Image src={userImage} height={150} />
        </div>
        <p className='font-bold text-white'>Eduardo Henrique</p>
      </div>

      <div className='bloco btts p-4 flex flex-col gap-4'>
        <Botao title={"Home"} toPage={"/"} image={home} />
        <Botao title={"Portifólio"} toPage={"/portifolio"} image={maleta} />
        <Botao title={"Certificados"} toPage={"/certificados"} image={certificados} />
        <Botao title={"E-mail"} toPage={"/email"} image={email} />
        <Botao title={"GitHub"} toPage={"/gitstatus"} image={github} />
      </div>

      <div className='bloco flex gap-2 redes p-3'>
        <Link href='/' className='flex justify-center items-center p-3 hover:bg-neutral-700 transition-colors rounded-2xl'>
          <Image src={github} width={100} />
        </Link>

        <Link href='/' className='flex justify-center items-center p-3 hover:bg-neutral-700 transition-colors rounded-lg'>
          <Image src={linkedin} width={100} />
        </Link>

        <Link href='/' className='flex justify-center items-center p-3 hover:bg-neutral-700 transition-colors rounded-lg'>
          <Image src={curriculo} width={100} />
        </Link>
      </div>
    </div>
  )
}