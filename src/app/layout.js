import NavBar from "./components/navbar/navbar"
import "./styles/global.css"

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Portifolio',
  description: 'Meu portifolio juntamente com meu curriculo',
  icons: "/user.png"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={inter.className}>
      <body>

        <NavBar />

        {children}

      </body>
    </html>
  )
}
