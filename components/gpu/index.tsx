'use client'
import React, { useEffect, useState } from 'react'
import ItemGPU from './item'
import Pagination from '../pagination'
import { Select, SelectItem } from '@nextui-org/react'



const data = [
    {
        "processor": "Intel(R) Xeon(R) CPU E5-26xx v4",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "7.25 GB",
        "disk": "9.59 GB | 458 MB/s",
        "gpu": "4 X NVIDIA GeForce RTX 4090",
        "vram": "24560 MB",
        "number_gpu": 4,
        "net": "⌃32⌄267 Mbit/s",
        "id": "976",
        "location": {
            "flag": 'https://flagcdn.com/w320/de.png',
            "name": "Germany Frankfurt am Main"
        },
        "reliability": "99.32%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 2.699,
        "ai_score": "60000"
    },
    {
        "processor": "AMD Ryzen Threadripper 1950X 16-Core Processor",
        "architecture": "x86_64",
        "cores": 32,
        "ram": "62.6 GB",
        "disk": "324 GB | 696 MB/s",
        "gpu": "4 X NVIDIA GeForce RTX 4090",
        "vram": "24560 MB",
        "number_gpu": 4,
        "net": "⌃41⌄83 Mbit/s",
        "id": "989",
        "location": {
            "flag": 'https://flagcdn.com/w320/ba.png',
            "name": "Bosnia and Herzegovina   Sarajevo"
        },
        "reliability": "98.7%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 13.442,
        "ai_score": "65553"
    },
    {
        "processor": "AMD Ryzen 5 5600X 6-Core Processor",
        "architecture": "x86_64",
        "cores": 12,
        "ram": "62.7 GB",
        "disk": "672 GB | 2180 MB/s",
        "gpu": "1 X NVIDIA GeForce RTX 3090",
        "vram": "24580 MB",
        "number_gpu": 1,
        "net": "⌃696⌄848 Mbit/s",
        "id": "1502",
        "location": {
            "flag": 'https://flagcdn.com/w320/ua.png',
            "name": "Ukraine Kyiv"
        },
        "reliability": "65.2%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.564,
        "ai_score": "50071"
    },
    {
        "processor": "Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "15.5 GB",
        "disk": "911 GB | 1510 MB/s",
        "gpu": "1 X NVIDIA GeForce RTX 3090",
        "vram": "24580 MB",
        "number_gpu": 1,
        "net": "⌃383⌄456 Mbit/s",
        "id": "1603",
        "location": {
            "flag": 'https://flagcdn.com/w320/bn.png',
            "name": "United Kingdom "
        },
        "reliability": "99.33%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.403,
        "ai_score": "41040"
    },
    {
        "processor": "AMD EPYC 7551P 32-Core Processor",
        "architecture": "x86_64",
        "cores": 64,
        "ram": "126 GB",
        "disk": "1.73 TB | 841 MB/s",
        "gpu": "4 X NVIDIA GeForce RTX 4090",
        "vram": "24560 MB",
        "number_gpu": 2,
        "net": "⌃98⌄139 Mbit/s",
        "id": "1",
        "location": {
            "flag": 'https://flagcdn.com/w320/id.png',
            "name": "Indonesia Bandunganada"
        },
        "reliability": "99.15%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 8.93,
        "ai_score": "37868"
    },
    {
        "processor": "Intel(R) Core(TM) i5-4570S CPU @ 2.90GHz",
        "architecture": "x86_64",
        "cores": 4,
        "ram": "15.5 GB",
        "disk": " 66 GB | 1830 MB/s",
        "gpu": "1 X NVIDIA GeForce RTX 3060",
        "vram": "12290 MB",
        "number_gpu": 1,
        "net": "⌃38⌄423 Mbit/s",
        "id": "181",
        "location": {
            "flag": 'https://flagcdn.com/w320/nr.png',
            "name": "Australia Melbourne"
        },
        "reliability": "99.08%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.1,
        "ai_score": "36180"
    },
    {
        "processor": "Intel(R) Xeon(R) Platinum 8260M CPU @ 2.40GHz",
        "architecture": "x86_64",
        "cores": 48,
        "ram": "125 GB",
        "disk": "1020 GB | 860 MB/s",
        "gpu": "4 X Tesla V100-PCIE-16GB",
        "vram": "16380 MB",
        "number_gpu": 4,
        "net": " ⌃582⌄488 Mbit/s",
        "id": "1314",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.08%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.313,
        "ai_score": "33790"
    },
    {
        "processor": " Intel(R) Xeon(R) CPU E5-2697 v4 @ 2.30GHz",
        "architecture": "x86_64",
        "cores": 72,
        "ram": "62.8 GB",
        "disk": "344 GB | 1072 MB/s",
        "gpu": "3 X Tesla V100-PCIE-12GB",
        "vram": "12290 MB",
        "number_gpu": 4,
        "net": "⌃790⌄889 Mbit/s",
        "id": "1317",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.13%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.14,
        "ai_score": "26083"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2680 v4 @ 2.40GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "62.7 GB",
        "disk": "93 GB | 1431 MB/s",
        "gpu": "1 X NVIDIA GeForce GTX 1080",
        "vram": "8190 MB",
        "number_gpu": 1,
        "net": "⌃770⌄893 Mbit/s",
        "id": "1357",
        "location": {
            "flag": 'https://flagcdn.com/w320/fi.png',
            "name": "Finland   Helsinki"
        },
        "reliability": "99.34% ",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 2.683,
        "ai_score": "16860"
    },
    {
        "processor": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "62.7 GB",
        "disk": "94 GB | 1361 MB/s",
        "gpu": "1 X NVIDIA GeForce GTX 1080",
        "vram": "8190 MB",
        "number_gpu": 1,
        "net": "⌃782⌄897 Mbit/s",
        "id": "1356",
        "location": {
            "flag": 'https://flagcdn.com/w320/fi.png',
            "name": "Finland   Helsinki"
        },
        "reliability": "99.31% ",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 2.683,
        "ai_score": "16848"
    },
    {
        "processor": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "62.7 GB",
        "disk": "93 GB | 1419 MB/s",
        "gpu": "1 X NVIDIA GeForce GTX 1080",
        "vram": "8190 MB",
        "number_gpu": 1,
        "net": "⌃757⌄831 Mbit/s",
        "id": "962",
        "location": {
            "flag": 'https://flagcdn.com/w320/fi.png',
            "name": "Finland   Helsinki"
        },
        "reliability": "99.3% ",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 2.683,
        "ai_score": " 16817"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-1607 v4 @ 3.10GHz",
        "architecture": "x86_64",
        "cores": 4,
        "ram": "15.5 GB",
        "disk": "49 GB | 1122 MB/s",
        "gpu": "1 X NVIDIA GeForce GTX 1660 SUPER",
        "vram": "6140 MB",
        "number_gpu": 1,
        "net": "⌃38⌄508 Mbit/s",
        "id": "146",
        "location": {
            "flag": 'https://flagcdn.com/w320/nr.png',
            "name": "Australia Melbourne"
        },
        "reliability": "98.76%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1,
        "ai_score": "14435"
    },
    {
        "processor": "Intel(R) Celeron(R) G6900",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "15.4 GB",
        "disk": "92 GB | 262 MB/s",
        "gpu": "5 X NVIDIA RTX A2000 12GB",
        "vram": "12280 MB",
        "number_gpu": 5,
        "net": "⌃181⌄242 Mbit/s",
        "id": "642",
        "location": {
            "flag": 'https://flagcdn.com/w320/ar.png',
            "name": "Argentina Quilmes Oeste"
        },
        "reliability": "99.10%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 16.02,
        "ai_score": "13120"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2620 v3 @ 2.40GHz",
        "architecture": "x86_64",
        "cores": 10,
        "ram": "15.6 GB",
        "disk": "81 GB | 1351 MB/s",
        "gpu": "1 X NVIDIA GeForce RTX 3060 Laptop GPU",
        "vram": "12290 MB",
        "number_gpu": 1,
        "net": "⌃183⌄565 Mbit/s",
        "id": "932",
        "location": {
            "flag": 'https://flagcdn.com/w320/cx.png',
            "name": "New Zealand Auckland"
        },
        "reliability": "57.01%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.4,
        "ai_score": "12859"
    },
    {
        "processor": "Intel(R) Celeron(R) G5905 CPU @ 3.50GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "11.6 GB",
        "disk": "336 GB | 802 MB/s",
        "gpu": "2 X NVIDIA RTX A2000 12GB",
        "vram": "12280 MB",
        "number_gpu": 2,
        "net": "⌃276⌄218 Mbit/s",
        "id": "132",
        "location": {
            "flag": 'https://flagcdn.com/w320/ar.png',
            "name": "Argentina Quilmes Oeste"
        },
        "reliability": "99.22%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 15.63,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G4560 @ 3.50GHz",
        "architecture": "x86_64",
        "cores": 4,
        "ram": "7.7 GB",
        "disk": "199 GB | 162 MB/s",
        "gpu": "8 X NVIDIA GeForce GTX 1060 6GB",
        "vram": "6140 MB",
        "number_gpu": 8,
        "net": "⌃4⌄5 Mbit/s",
        "id": "349",
        "location": {
            "flag": 'https://flagcdn.com/w320/ae.png',
            "name": "United Arab Emirates Dubai"
        },
        "reliability": "96.48%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.459,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G4560 @ 3.50GHz",
        "architecture": "x86_64",
        "cores": 4,
        "ram": "15.6 GB",
        "disk": "126 GB | 1698 MB/s",
        "gpu": "6 X NVIDIA GeForce GTX 1060 3GB",
        "vram": "3070 MB",
        "number_gpu": 6,
        "net": "⌃66⌄110 Mbit/s",
        "id": "239",
        "location": {
            "flag": 'https://flagcdn.com/w320/ua.png',
            "name": "Ukraine Kyiv"
        },
        "reliability": "98.77%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.653,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2697 v4 @ 2.30GHz",
        "architecture": "x86_64",
        "cores": 24,
        "ram": "28.8 GB",
        "disk": "376 GB | 479 MB/s",
        "gpu": "1 X Tesla V100-PCIE-12GB",
        "vram": "12290 MB",
        "number_gpu": 1,
        "net": "⌃597⌄383 Mbit/s",
        "id": "1493",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.17%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.221,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "59.4 GB",
        "disk": "388 GB | 673 MB/s",
        "gpu": "2 X Tesla P100-PCIE-16GB",
        "vram": "16380 MB",
        "number_gpu": 2,
        "net": "⌃340⌄214 Mbit/s",
        "id": "1497",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.28%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.208,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G3260 @ 3.30GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "3.52 GB",
        "disk": "72 GB | 382 MB/s",
        "gpu": "1 X P106-090",
        "vram": "6080 MB",
        "number_gpu": 1,
        "net": "⌃6⌄26 Mbit/s",
        "id": "635",
        "location": {
            "flag": "https://flagcdn.com/w320/ru.png",
            "name": " Russia Moscow"
        },
        "reliability": "97.75%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.156,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G3260 @ 3.30GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "7.69 GB",
        "disk": "40 | 0 MB/s",
        "gpu": "1 X P106-090",
        "vram": "6080 MB",
        "number_gpu": 1,
        "net": "⌃0⌄0 Mbit/s",
        "id": "533",
        "location": {
            "flag": "https://flagcdn.com/w320/ru.png",
            "name": " Russia Moscow"
        },
        "reliability": "99.39%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.156,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-26xx v4",
        "architecture": "x86_64",
        "cores": 4,
        "ram": "3.77 GB",
        "disk": "202 GB | 90 MB/s",
        "gpu": "8 X NVIDIA GeForce GTX 1060 3GB",
        "vram": "3070 MB",
        "number_gpu": 8,
        "net": "⌃6⌄5 Mbit/s",
        "id": "212",
        "location": {
            "flag": 'https://flagcdn.com/w320/de.png',
            "name": "CaGermany   Frankfurt am Mainnada"
        },
        "reliability": "91.35%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.1579,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2620 v2 @ 2.10GHz",
        "architecture": "x86_64",
        "cores": 5,
        "ram": "88.3 GB",
        "disk": "388 GB | 515 MB/s",
        "gpu": "2 X Tesla P100-PCIE-16GB",
        "vram": "16380 MB",
        "number_gpu": 2,
        "net": "⌃285⌄253 Mbit/s",
        "id": "1",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.25%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.368,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2697 v4 @ 2.30GHz",
        "architecture": "x86_64",
        "cores": 18,
        "ram": "38.3 GB",
        "disk": "359 GB | 534 MB/s",
        "gpu": "1 X Tesla V100-PCIE-16GB",
        "vram": "16380 MB",
        "number_gpu": 4,
        "net": "⌃41⌄83 Mbit/s",
        "id": "1538",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.16%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.21,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Celeron(R) CPU G3930 @ 2.90GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "15.6 GB",
        "disk": "267 GB | 675 MB/s",
        "gpu": "7 X NVIDIA GeForce GTX 1060 3GB",
        "vram": "3070 MB",
        "number_gpu": 7,
        "net": "⌃8⌄8 Mbit/s",
        "id": "1",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "91.5%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.349,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Core(TM) i7-7700 CPU @ 3.60GHz",
        "architecture": "x86_64",
        "cores": 8,
        "ram": "62.7 GB",
        "disk": "98 GB | 1369 MB/s",
        "gpu": "1 X NVIDIA GeForce GTX 1080",
        "vram": "8190 MB",
        "number_gpu": 1,
        "net": "⌃753⌄875 Mbit/s",
        "id": "963",
        "location": {
            "flag": 'https://flagcdn.com/w320/fi.png',
            "name": "Finland Helsinki"
        },
        "reliability": "99.37%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 2.657,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Xeon(R) CPU E5-2697 v4 @ 2.30GHz",
        "architecture": "x86_64",
        "cores": 18,
        "ram": "154 GB",
        "disk": "378 GB | 850 MB/s",
        "gpu": "3 X Tesla V100-PCIE-16GB",
        "vram": "13680 MB",
        "number_gpu": 3,
        "net": "⌃1011⌄515 Mbit/s",
        "id": "1581",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "99.25%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.22,
        "ai_score": "0"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G4400 @ 3.30GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "3.57 GB",
        "disk": "97 GB | 0 MB/s",
        "gpu": "1 X NVIDIA P106-090",
        "vram": "6080 MB",
        "number_gpu": 1,
        "net": "⌃0⌄0 Mbit/s",
        "id": "455",
        "location": {
            "flag": 'https://flagcdn.com/w320/ru.png',
            "name": "Russia Moscow"
        },
        "reliability": "99.44%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.123,
        "ai_score": "0"
    },
    {
        "processor": "AMD Ryzen Threadripper 1950X 16-Core Processor",
        "architecture": "x86_64",
        "cores": 32,
        "ram": "62.6 GB",
        "disk": "330 GB | 696 MB/s",
        "gpu": "4 X NVIDIA GeForce RTX 4090",
        "vram": "24560 MB",
        "number_gpu": 4,
        "net": "⌃41⌄83 Mbit/s",
        "id": "1",
        "location": {
            "flag": 'https://flagcdn.com/w320/ca.png',
            "name": "Canada"
        },
        "reliability": "96.66%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 14.34,
        "ai_score": "60000"
    },
    {
        "processor": "Intel(R) Pentium(R) CPU G3258 @ 3.20GHz",
        "architecture": "x86_64",
        "cores": 2,
        "ram": "3.51 GB",
        "disk": "98 GB | 662 MB/s",
        "gpu": "1 X NVIDIA P106-090",
        "vram": "6140 MB",
        "number_gpu": 1,
        "net": "⌃5⌄30 Mbit/s",
        "id": "1516",
        "location": {
            "flag": 'https://flagcdn.com/w320/ru.png',
            "name": "Russia Moscow"
        },
        "reliability": "94.18%",
        "price": "10|0|0.01:Ø10.01",
        "total_price": 1.11,
        "ai_score": "0"
    },
    // {
    //     "processor": "AMD Ryzen Threadripper 1950X 16-Core Processor",
    //     "architecture": "x86_64",
    //     "cores": 32,
    //     "ram": "62.6 GB",
    //     "disk": "330 GB | 696 MB/s",
    //     "gpu": "4 X NVIDIA GeForce RTX 4090",
    //     "vram": "24560 MB",
    //     "number_gpu": 4,
    //     "net": "⌃41⌄83 Mbit/s",
    //     "id": "1",
    //     "location": {
    //         "flag": "https://flagcdn.com/w320/ca.png",
    //         "name": "Canada"
    //     },
    //     "reliability": "96.66%",
    //     "price": "10|0|0.01:Ø10.01",
    //     "total_price": 14.34,
    //     "ai_score": "60000"
    // },
]



const GPUIndexPage = () => {

    const [list, setList] = useState(data);



    useEffect(() => {
        setList(data.slice(0, 6));
    }, [])


    const sort = [
        {
            type: 'Asc'
        },
        {
            type: 'Desc'
        }
    ]

    const handlePress = (e: any) => {

        if (e.target.outerText.includes('Asc')) {
            setList(data.sort((a, b) => a.total_price - b.total_price).slice(0, 6));
        } else {
            setList(data.sort((a, b) => b.total_price - a.total_price).slice(0, 6))
        }
    }


    return (
        <div className='p-5'>

            <Select
                label="Sort by price"
                size='sm'
                className="max-w-xs mb-5"
            >
                {sort.map((item: any) => (
                    <SelectItem onPress={handlePress} key={item.type} value={item.type}>
                        {item.type}
                    </SelectItem>
                ))}
            </Select>
            <div className='grid grid-cols-1 gap-4'>
                {list.map((item, index) => {
                    return (
                        <ItemGPU key={index} item={item} />
                    )
                })}
            </div>
            <Pagination itemsPerPage={6} items={list} setList={setList} data={data} />
        </div>

    )
}

export default GPUIndexPage
