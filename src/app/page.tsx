import Image from 'next/image'

import Header  from './components/Repeat/Header'
import Bar  from './components/Bar'
import Principals from './components/Principals'
import Popular from './components/Popular'
import Games from './components/Games'

export default function Home() {
  return (
    <div>
      <Header/>
          <div className='lg:mt-[5%] mt-[1%]'>
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
