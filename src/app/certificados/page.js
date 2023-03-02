import { Inter } from "next/font/google"
import NavBar from "../components/navbar/navbar"
import Image from "next/image"

import scrum from '../../../public/certificados/SCRUM.pdf.png'
import linux from '../../../public/certificados/linux.png'
import Preview from "../components/conteudos/preview"

const inter = Inter({ subsets: ["latin"] })

export default function Certification() {
  return (
    <div className={inter.className}>
      <div className='w-full h-full flex'>
        <NavBar />

        <div className="w-3/4 pt-4 pb-6 pr-5">
          <div className="flex flex-wrap justify-center gap-7">
            <Preview link={"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5b1c2e0a-e4b4-4a61-9696-e21d185585fe/ScrumFundamentalsCertified-EduardoHenrique-959217.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230302T180441Z&X-Amz-Expires=86400&X-Amz-Signature=d480a4c66aac1558c0d7660743431bfe5399a77f92ec02ecd1cba937aa926e9d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22ScrumFundamentalsCertified-EduardoHenrique-959217.pdf%22&x-id=GetObject"} image={scrum} />
            <Preview link={"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f400931-42d9-460e-88d3-dc9f60a1476c/Eduardo-Henrique-Silva-Linux-40-Horas-Certificado-Curso-em-Video.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230302T180439Z&X-Amz-Expires=86400&X-Amz-Signature=3870299ebef6c62ce1398ce8f87c20930582e49b4d82939f5e1eaa39f9c8f9af&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Eduardo-Henrique-Silva-Linux-40-Horas-Certificado-Curso-em-Video.pdf%22&x-id=GetObject"} image={linux}/>
          </div>
        </div>
      </div>
    </div>
  )
}