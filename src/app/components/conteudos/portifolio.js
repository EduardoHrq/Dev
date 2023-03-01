import Image from "next/image";
import "./style.css"
import Link from "next/link";

export default function Demonstracao({ projeto, imagem, linkPage, linkRepo }) {

  const url = 'https://github-readme-stats.vercel.app/api/pin/?username=EduardoHrq&theme=transparent&text_color=b2a3ff&hide_border=true&hide_title=true&repo=' + projeto

  return (
    <div className="pic rounded-xl w-72 p-2 bg-neutral-700 bg-opacity-50">
      <Link href={linkPage} target="_blank">
        <Image src={imagem} height={132} className="block m-auto" />
      </Link>
      <Link href={linkRepo} target="_blank">
        <img src={url} alt="" className="imgGit rounded-b-xl" />
      </Link>
    </div>
  )
}