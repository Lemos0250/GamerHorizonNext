import Image from 'next/image'

import Header  from './components/Repeat/Header'
import Bar  from './components/Principal/Bar'
import Principals from './components/Principal/Principals'
import Popular from './components/Principal/Popular'
import Games from './components/Principal/Games'

export default function Home() {
  return (
    <div>
      <Header/>
          <div className='lg:mt-[5%] mt-[10%]'>
            <Bar/>
          </div>
          <div className='lg:mt-[5%] mt-[15%]'>
            <Principals/>
          </div>
          <div className='lg:mt-[5%] mt-[15%]'>
            <Popular/>
          </div>
          <div className='lg:mt-[10%] mt-[15%]'>
            <Games/>
          </div>
          <div className='lg:mt-[5%] mt-[15%]'>
            <Popular/>
          </div>
          <div className='lg:mt-[10%] mt-[15%]'>
            <Games/>
          </div>
          <div className='lg:mt-[5%] mt-[15%]'>
            <Popular/>
          </div>
          <div className='lg:mt-[10%] mt-[15%]'>
            <Games/>
          </div>
    </div>
  )
}
