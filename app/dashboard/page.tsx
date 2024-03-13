import Map from '@/components/dashboard/Map'
import React from 'react'

const Dashboard = () => {
  return (
    <main className='p-6'>
      <section className='flex space-x-4 h-[360px]'>
        <div className='w-[250px]'>
            <span className='bg-cyan-500 p-2 w-full block text-white font-semibold rounded'>My nodes</span>
        </div>
        <Map />
      </section>
      <section className='flex h-[360px] space-x-4'>
        <div className='flex-1'>
          <span className='bg-cyan-500 p-2 w-full block text-white font-semibold rounded'>Services reward</span>
          <p className='flex items-center justify-center h-full'>
            No data
          </p>
        </div>
        <div className='flex-1'>
          <span className='bg-cyan-500 p-2 w-full block text-white font-semibold rounded'>Staking reward</span>
          <p className='flex items-center justify-center h-full'>
            No data
          </p>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
