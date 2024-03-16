import React from 'react'
import ic_helpcenter from '@/icon/ic-help-center.svg';
import Image from 'next/image';
import ic_arrow_right from '@/icon/arrow-right.svg'

const HelpCenter = () => {
  return (
    <div className='w-full h-screen flex items-center lg:justify-center'>
      <div className='w-full lg:w-[625px] h-[400px] mx-auto flex flex-col gap-[64px]'>
        <p className='text-[#FFFFFF] text-[32px] font-bold text-center'>Link To Telegram</p>
        <div className='flex gap-4 items-center justify-between border btnRounded p-4'>
          <div className='flex items-center gap-8'>
            <Image src={ic_helpcenter} alt='icon' />
            <p className='text-[#FDFDFD] text-xl font-normal'>https://t.me/abc</p>
          </div>
          <button className='bg-[#FDFDFD] px-4 py-3 rounded-lg btnRounded'>
            <Image src={ic_arrow_right} alt='icon' className='w-6 h-6 min-w-6' />
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default HelpCenter