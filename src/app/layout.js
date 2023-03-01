import "./styles/global.css"

export const metadata = {
  title: 'Portifolio',
  description: 'Meu portifolio juntamente com meu curriculo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
