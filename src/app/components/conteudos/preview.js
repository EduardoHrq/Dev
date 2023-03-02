import Image from "next/image"
import Link from "next/link"

import medalha from '../../../../public/certificados/medalha.png'

export default function Preview({ image, link }) {
  return (
    <Link href={link} target="_blank" className="w-[300px] rounded-xl p-3 bg-zinc-700 bg-opacity-50 relative z-[1]">
      <Image src={medalha} className="absolute w-[75px] rounded-xl bottom-0 right-0 translate-y-[25%] translate-x-[25%] z-[2]" />
      <Image src={image} className="brightness-50 hover:brightness-100 transition-all duration-300"/>
    </Link>
  )
}