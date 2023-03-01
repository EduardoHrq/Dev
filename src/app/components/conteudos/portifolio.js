import Image from "next/image";
import "./style.css"

import devPage from '../../../../public/devpage.png'

export default function Demonstracao() {
  return (
    <div className="pic rounded-xl w-72 p-2 bg-neutral-700 bg-opacity-50">
      <Image src={devPage} />
      {/* <p className="w-full text-center bg-neutral-700">NOME DO PROJETO</p> */}
      <img src="https://github-readme-stats.vercel.app/api/pin/?username=EduardoHrq&theme=transparent&text_color=b2a3ff&hide_border=true&hide_title=true&repo=portfolio" alt="" className="imgGit rounded-b-xl"/>
    </div>
  )
}