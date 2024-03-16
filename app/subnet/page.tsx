'use client'
import TableComponent from '@/components/table'
import React from 'react'
import { Columns } from '../../components/table/type';

type Subnet = {
  "UID": number;
  "Subnet Name": string;
  "N": number
  "MAX_N": number;
  "EMISSION": number;
  "TEMPO": number;
  "RECYCLE": string;
  "POW": string;
}

const data: Subnet[] = [
  {
    "UID": 0,
    "Subnet Name": "root",
    "N": 64,
    "MAX_N": 64,
    "EMISSION": 0,
    "TEMPO": 100,
    "RECYCLE": "τ1.00000",
    "POW": "4611686.02 T"
  },
  {
    "UID": 1,
    "Subnet Name": "𝛼・text-generation",
    "N": 1024,
    "MAX_N": 1024,
    "EMISSION": 0.062,
    "TEMPO": 99,
    "RECYCLE": "τ0.09891",
    "POW": "1000000.00 T"
  },
  {
    "UID": 2,
    "Subnet Name": "β・translation",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.01,
    "TEMPO": 360,
    "RECYCLE": "τ0.39434",
    "POW": "100.00 T"
  },
  {
    "UID": 3,
    "Subnet Name": "𝛾・hotkey",
    "N": 142,
    "MAX_N": 256,
    "EMISSION": 0.001,
    "TEMPO": 360,
    "RECYCLE": "τ0.00971",
    "POW": "18446744.07 T"
  },
  {
    "UID": 4,
    "Subnet Name": "∆・sybil",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0697,
    "TEMPO": 360,
    "RECYCLE": "τ2.88000",
    "POW": "100.00 T"
  },
  {
    "UID": 5,
    "Subnet Name": "ε・open-kaito",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0261,
    "TEMPO": 360,
    "RECYCLE": "τ1.70032",
    "POW": "18446744.07 T"
  },
  {
    "UID": 6,
    "Subnet Name": "ζ・nous",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0753,
    "TEMPO": 360,
    "RECYCLE": "τ0.01671",
    "POW": "18446744.07 T"
  },
  {
    "UID": 7,
    "Subnet Name": "η・storage",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0063,
    "TEMPO": 360,
    "RECYCLE": "τ1.00000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 8,
    "Subnet Name": "θ・time-series",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0675,
    "TEMPO": 360,
    "RECYCLE": "τ6.15372",
    "POW": "10.00 M"
  },
  {
    "UID": 9,
    "Subnet Name": "ι・pretraining",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0671,
    "TEMPO": 360,
    "RECYCLE": "τ0.10000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 10,
    "Subnet Name": "κ・taomap",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0088,
    "TEMPO": 360,
    "RECYCLE": "τ0.01000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 11,
    "Subnet Name": "λ・transcription",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0151,
    "TEMPO": 360,
    "RECYCLE": "τ0.37276",
    "POW": "18446744.07 T"
  },
  {
    "UID": 12,
    "Subnet Name": "µ・horde",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0078,
    "TEMPO": 360,
    "RECYCLE": "τ0.05000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 13,
    "Subnet Name": "ν・dataverse",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0216,
    "TEMPO": 360,
    "RECYCLE": "τ0.10000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 14,
    "Subnet Name": "ξ・llm-defend",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0264,
    "TEMPO": 360,
    "RECYCLE": "τ0.90101",
    "POW": "18446744.07 T"
  },
  {
    "UID": 15,
    "Subnet Name": "ο・chain-insight",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0373,
    "TEMPO": 360,
    "RECYCLE": "τ0.42985",
    "POW": "18446744.07 T"
  },
  {
    "UID": 16,
    "Subnet Name": "π・music-gen",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0159,
    "TEMPO": 360,
    "RECYCLE": "τ0.38525",
    "POW": "18446744.07 T"
  },
  {
    "UID": 17,
    "Subnet Name": "ρ・flavia",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0152,
    "TEMPO": 360,
    "RECYCLE": "τ0.17970",
    "POW": "18446744.07 T"
  },
  {
    "UID": 18,
    "Subnet Name": "σ・cortex_t",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.1048,
    "TEMPO": 360,
    "RECYCLE": "τ1.00000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 19,
    "Subnet Name": "τ・vision",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0885,
    "TEMPO": 360,
    "RECYCLE": "τ4.10989 ",
    "POW": "18446744.07 T"
  },
  {
    "UID": 20,
    "Subnet Name": "υ・bitagent",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0258,
    "TEMPO": 360,
    "RECYCLE": "τ1.19668",
    "POW": "18446744.07 T"
  },
  {
    "UID": 21,
    "Subnet Name": "φ・filetao",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0681,
    "TEMPO": 360,
    "RECYCLE": "τ3.95441",
    "POW": "18446744.07 T"
  },
  {
    "UID": 22,
    "Subnet Name": "χ・datura",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0395,
    "TEMPO": 360,
    "RECYCLE": "τ1.54928",
    "POW": "18446744.07 T"
  },
  {
    "UID": 23,
    "Subnet Name": "ψ・nicheimage",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0136,
    "TEMPO": 360,
    "RECYCLE": "τ0.69540",
    "POW": "18446744.07 T"
  },
  {
    "UID": 24,
    "Subnet Name": "ω・omega",
    "N": 78,
    "MAX_N": 256,
    "EMISSION": 0.0024,
    "TEMPO": 360,
    "RECYCLE": "τ0.10702",
    "POW": "18446744.07 T"
  },
  {
    "UID": 25,
    "Subnet Name": "א・hivetrain",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0125,
    "TEMPO": 360,
    "RECYCLE": "τ0.62292",
    "POW": "18446744.07 T"
  },
  {
    "UID": 26,
    "Subnet Name": "ב・alchemy",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0241,
    "TEMPO": 360,
    "RECYCLE": "τ1.51139",
    "POW": "18446744.07 T"
  },
  {
    "UID": 27,
    "Subnet Name": "ג・compute",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0167,
    "TEMPO": 360,
    "RECYCLE": "τ1.35000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 28,
    "Subnet Name": "ד・sp-500-oracle",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0363,
    "TEMPO": 360,
    "RECYCLE": "τ1.68750",
    "POW": "18446744.07 T"
  },
  {
    "UID": 29,
    "Subnet Name": "ה・fractal-research",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0178,
    "TEMPO": 360,
    "RECYCLE": "τ0.16872",
    "POW": "18446744.07 T"
  },
  {
    "UID": 30,
    "Subnet Name": "ו・wombo",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.007,
    "TEMPO": 360,
    "RECYCLE": "τ0.22850",
    "POW": "18446744.07 T"
  },
  {
    "UID": 31,
    "Subnet Name": "ז・healthcare",
    "N": 256,
    "MAX_N": 256,
    "EMISSION": 0.0098,
    "TEMPO": 360,
    "RECYCLE": "τ0.20000",
    "POW": "18446744.07 T"
  },
  {
    "UID": 32,
    "Subnet Name": "ח・its-ai",
    "N": 177,
    "MAX_N": 256,
    "EMISSION": 0.0001,
    "TEMPO": 360,
    "RECYCLE": "τ0.15251",
    "POW": "18446744.07 T"
  }
]

const columnsSubnet: Array<Columns<Subnet>> = [
  {
    key: 'uid',
    name: 'UID',
    renderColumns: (item) => {
      return (
        <p className='w-[80px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[80px] text-center'>{item.UID}</p>
    }
  },
  {
    key: 'subnet_name',
    name: 'Subnet Name',
    renderColumns: (item) => {
      return (
        <p className='w-[200px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-start'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[200px] text-left'>{item['Subnet Name']}</p>
    }
  },
  {
    key: 'n',
    name: 'N',
    renderColumns: (item) => {
      return (
        <p className='grow text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='grow text-center'>{item.N}</p>
    }
  },
  {
    key: 'max_n',
    name: 'Max_N',
    renderColumns: (item) => {
      return (
        <p className='w-[80px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-end'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[80px] text-end'>{item.MAX_N}</p>
    }
  },
  {
    key: 'emission',
    name: 'emission',
    renderColumns: (item) => {
      return (
        <p className='w-[100px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-end'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[100px] text-end'>{item.EMISSION}</p>
    }
  },
  {
    key: 'tempo',
    name: 'tempo',
    renderColumns: (item) => {
      return (
        <p className='w-[80px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-end'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[80px] text-end'>{item.TEMPO}</p>
    }
  },
  {
    key: 'recycle',
    name: 'recycle',
    renderColumns: (item) => {
      return (
        <p className='w-[180px] text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-center'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[180px] text-center'>{item.RECYCLE}</p>
    }
  },
  {
    key: 'pow',
    name: 'pow',
    renderColumns: (item) => {
      return (
        <p className='w-[180px] pr-4 text-[#6C3BEF] capitalize text-sm font-semibold flex items-center justify-end'>{item.name}</p>
      )
    },
    render: (_, item) => {
      return <p className='w-[180px] text-end pr-4'>{item.POW}</p>
    }
  },
]



const Subnet = () => {
  return (
    <div className='w-[980px] mx-auto'>
      <p className='text-[#fff] font-bold'>
        There are no subnet slot available now. <br />
        You can explore subnet all current subnet information below
      </p>
      <TableComponent className='mt-12' data={data} columns={columnsSubnet} />
    </div>
  )
}

export default Subnet