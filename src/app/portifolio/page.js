import { Inter } from "next/font/google"
import NavBar from "../components/navbar/navbar"
import Demonstracao from "../components/conteudos/portifolio"

const inter = Inter({ subsets: ['latin'] })

export default function Portifolio() {
  return (
    <div className={inter.className}>
      <div className='w-full h-full flex'>
        <NavBar />

        <div className="w-3/4 pt-4 pb-6 pr-5">
          <div className="flex flex-wrap justify-center gap-5">
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
            <Demonstracao />
          </div>
        </div>
      </div>
    </div>
  )
}