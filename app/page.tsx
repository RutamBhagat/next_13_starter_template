import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className='text-red-600 font-bold text-xl'>Hello world</div>
    </div>
  )
}
