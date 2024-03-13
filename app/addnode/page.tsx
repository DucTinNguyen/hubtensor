'use client'
import React from 'react'
import SettingCollapse from '../settings/setting-collapse'
import { Input } from "@nextui-org/react";
import ModalOpen from '@/components/modal';
const AddNode = () => {
  return (
    <div className='p-6 flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>Add new node</h2>
      <div className=' grid grid-cols-2 gap-4'>
        <Input type="text" label="Name" size='sm' />
        <Input type="text" label="IP Address" size='sm' />
        <Input defaultValue='47015' type="text" label="Port" size='sm' />
        <Input defaultValue='518000' type="text" label="Service port range start" size='sm' />
        <Input defaultValue='52000' type="text" label="Service port range end" size='sm' />
        <div className='flex items-center '>
          <div className='border border-zinc-300 rounded-lg w-full p-3'>
            <span className='mr-2'>VPN</span>
            <input type='checkbox' />
          </div>
        </div>
      </div>
      
      <div className='flex items-center justify-center space-x-3'>
        <ModalOpen title='Add' />
        <button className='p-2 border border-zinc-400 rounded-lg'>Cancel</button>
      </div>
    </div>
  )
}

export default AddNode
