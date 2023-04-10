import Link from "next/link"
import Image from "next/image"

export default function Botao({ toPage, image, title }) {
  return (
    <Link href={toPage} className='relative bg-neutral-700 rounded-3xl p-2 text-center text-white font-bold pages hover:rounded-xl transition-all duration-300 hover:shadow-[inset_0_0_0_4px_#27272a,_0_0_0_4px_#d4d4d4] active:scale-[-1]'>
      {title}
      <Image src={image} width={25} className='logo absolute top-1/2' />
    </Link>
  )
}