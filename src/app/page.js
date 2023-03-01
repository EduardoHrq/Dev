import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar/navbar'
import PageHome from './components/home/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={inter.className}>
      <div className='w-full h-full flex'>
        <NavBar />

        <div className="w-3/4 pt-4 pb-6 pr-5">
          <PageHome />
        </div>
      </div>
    </div>
  )
}
