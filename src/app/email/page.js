'use client'

import './style.css'

function Email() {

  function copiar() {
    navigator.clipboard.writeText('eduardohenriq0612002+page@gmail.com')
    textoAlert.style.visibility = 'visible'
    textoAlert.style.opacity = '1'
    setTimeout(() => {
      textoAlert.style.visibility = 'hidden'
      textoAlert.style.opacity = '0'
    }, 3000)
  }

  return (

    <div className="w-3/4 pt-4 pb-6 pr-5 flex flex-col gap-5">
      <div className="h-1/5 rounded-xl bg-zinc-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-4 text-white">
          <strong className="bg-zinc-300 p-4 rounded-xl text-black">Para</strong>
          <div className="text-xl">eduardohenriq0612002+page@gmail.com</div>
        </div>
        <div className="flex items-center gap-5">
          <p id="textoAlert" className="text-zinc-300 text-xl">E-mail Copiado!</p>
          <button onClick={copiar} className="bg-zinc-300 p-4 rounded-xl hover:bg-zinc-400 transition-colors">Copiar</button>
        </div>
      </div>

      <form className='w-full h-3/5'>
        <textarea className="w-full h-full rounded-xl bg-zinc-800 text-white outline-none p-5 resize-none"></textarea>

        <div className="flex justify-evenly items-center gap-5 mt-3">
          <button type='reset' className="py-4 px-32 rounded-xl text-black bg-red-500 hover:bg-red-400 transition-colors">Limpar</button>
          <button className="py-4 px-32 rounded-xl text-black  bg-zinc-300 hover:bg-zinc-100 transition-colors">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default Email