import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='grid grid-cols-12 gap-6 px-5 my-14 lg:px-48'>
    <div className="lg:col-span-3 col-span-12 bg-white rounded-2xl text-center"><Sidebar/></div>
    <div className="lg:col-span-9 col-span-12 bg-white rounded-2xl">HOME</div>
  </div>
}
