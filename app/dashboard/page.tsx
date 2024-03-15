'use client'
import TableComponent from '@/components/table';
import { Columns } from '@/components/table/type';
import Image from 'next/image';
import React from 'react'

import ic_node from '@/public/icons/ic-node.svg'
import ic_subnet from '@/public/icons/ic-subnet.svg'

type Node = {
  type: string;
  status: string;
  date_issued: string;
}

type Subnet = {
  type: string;
  netuid: string;
  n: string
  max_n: number;
  emission: string;
  tempo: string;
  recycle: string;
  pow: string;
  sudo: string
  status: string;
  date_issued: string;
}

const columns: Array<Columns<Node>> = [
  {
    key: 'type',
    name: 'Type',
    renderColumns: (item) => {
      return (
        <p className='flex-auto text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'netuid',
    name: ' NETUID',
    renderColumns: (item) => {
      return (
        <p className='flex-auto text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'n',
    name: 'N',
    renderColumns: (item) => {
      return (
        <p className='flex-auto text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  }

]

const columnsSubnet: Array<Columns<Subnet>> = [
  {
    key: 'type',
    name: 'Type',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'netuid',
    name: 'netuid',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'n',
    name: 'n',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'max_n',
    name: 'MAX_N',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'emission',
    name: 'emission',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'tempo',
    name: 'tempo',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'recycle',
    name: 'recycle',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'pow',
    name: 'pow',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'sudo',
    name: 'sudo',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'status',
    name: 'status',
    renderColumns: (item) => {
      return (
        <p className='flex-auto text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  {
    key: 'date issued',
    name: 'date issued',
    renderColumns: (item) => {
      return (
        <p className='flex-auto uppercase text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    }
  },
  

]



const Dashboard = () => {
  return (
    <main className=' flex flex-col lg:gap-10'>
      <div className='flex flex-col space-y-6'>
        <div className='flex items-center space-x-4'>
          <Image src={ic_node} alt='icon' className='w-8 h-8 min-w-8' />
          <span className='text-[24px] font-semibold text-[#FFFFFF]'>Node</span>
        </div>
        <TableComponent className='w-[440px]' columns={columns} data={[]} />
      </div>
      <div className='flex flex-col space-y-6'>
        <div className='flex items-center space-x-4'>
          <Image src={ic_subnet} alt='icon' className='w-8 h-8 min-w-8' />
          <span className='text-[24px] font-semibold text-[#FFFFFF]'>Subnet</span>
        </div>
        <TableComponent columns={columnsSubnet} data={[]} />
      </div>
    </main>
  )
}

export default Dashboard
