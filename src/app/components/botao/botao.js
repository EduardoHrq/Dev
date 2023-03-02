import Link from "next/link"
import Image from "next/image"

export default function Botao({ toPage, image, title}) {
  return (
    <Link href={toPage} className='relative bg-neutral-700 rounded-full p-2 text-center text-white font-bold pages hover:rounded-lg hover:bg-neutral-900 transition-all duration-200'>
      {title}
      <Image src={image} width={25} className='logo absolute top-1/2' />
    </Link>
  )
}