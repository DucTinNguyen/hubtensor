'use client'
import React, { useEffect, useState } from 'react'
import Country from './Country'
import VPNItem from './item'
import Pagination from '../pagination'


const data = [
  {
    id: 1,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 2,
    uuid: 971,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 3,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 4,
    uuid: 980,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 5,
    uuid: 1469,
    location: 'Canada',
    net: '⌃415⌄287',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 6,
    uuid: 1477,
    location: 'Canada',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 8,
    uuid: 150,
    location: 'Cyprus',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/cy.png'
  },
  {
    id: 1,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 2,
    uuid: 971,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 3,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 4,
    uuid: 980,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 5,
    uuid: 1469,
    location: 'Canada',
    net: '⌃415⌄287',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 6,
    uuid: 1477,
    location: 'Canada',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 8,
    uuid: 150,
    location: 'Cyprus',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/cy.png'
  },
  {
    id: 1,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 2,
    uuid: 971,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 3,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 4,
    uuid: 980,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 5,
    uuid: 1469,
    location: 'Canada',
    net: '⌃415⌄287',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 6,
    uuid: 1477,
    location: 'Canada',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 8,
    uuid: 150,
    location: 'Cyprus',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/cy.png'
  },
  {
    id: 1,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 2,
    uuid: 971,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 3,
    uuid: 976,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄267',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 4,
    uuid: 980,
    location: 'Germany Frankfurt am Main',
    net: '⌃32⌄263',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/de.png'
  },
  {
    id: 5,
    uuid: 1469,
    location: 'Canada',
    net: '⌃415⌄287',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 6,
    uuid: 1477,
    location: 'Canada',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/ca.png'
  },
  {
    id: 8,
    uuid: 150,
    location: 'Cyprus',
    net: '⌃793⌄323',
    price: '0.014',
    flag: 'https://flagcdn.com/w320/cy.png'
  },
]




const VPNIndex = () => {

  const [country, setCountry] = useState('');
  const [list, setList] = useState(data);

  const handleFilterList = (national: string) => {

    const dataUpdate = data.filter(item => item.location.includes(national));

    setList(dataUpdate)
  }


  useEffect(() => {
    handleFilterList(country);
  }, [country])

  useEffect(() => {
    setList(data.slice(0, 10))
  }, [])



  return (
    <div className='p-4'>
      <Country setCountry={setCountry} />
      {list.length > 0 ? <div className='grid grid-cols-2 gap-4'>
        {list.map((item, index) => {
          return (
            <VPNItem key={index} item={item} />
          )
        })}
      </div> : <p className='text-center mt-4'>No data</p>}

      <Pagination itemsPerPage={10} data={data} items={list} setList={setList} />
    </div>
  )
}

export default VPNIndex
