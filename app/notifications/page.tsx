'use client'

import React from 'react'
import { Select, SelectItem } from "@nextui-org/react";
import ModalOpen from '@/components/modal';


const data = [
  {
    name: 'Node was changed to "DISABLED" state'
  },
  {
    name: 'Status of withdrawal request'
  },
  {
    name: 'Account address was successful funded'
  },
  {
    name: 'Service node rewards distribution'
  },
]

const Notifications = () => {
  return (

    <div className='p-5 flex flex-col gap-5 w-[700px] mx-auto border border-[#e8e8e8] rounded-lg mt-5'>
      
      <div className='flex flex-col gap-4'>
        <span className='text-sm'>Choose the events you want to be notified about</span>
        <Select
          label="Choose the events"
          placeholder=""
          selectionMode="multiple"
          className="max-w-full"
        >
          {data.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              {item.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      
      <ModalOpen title='Update'/>
    </div>

  )
}

export default Notifications
