'use client'
import { Select, SelectItem } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { SetStateAction } from 'react'

const Country = ({ setCountry }: {
  setCountry: React.Dispatch<SetStateAction<string>>
}) => {



  const handleGetListCountry = async () => {
    const data = await axios.get('https://restcountries.com/v3.1/all');
    return data;
  }

  const { data } = useQuery({
    queryKey: ['country'],
    queryFn: () => {
      return handleGetListCountry();
    }
  })

  const handlePress = (e: any) => {
    setCountry(e.target.outerText)
  }

  return (
    <div className='flex items-center mb-5'>
      <Select
        label="Select country"
        size='sm'
        className="max-w-xs"
      >
        {data?.data.map((item: any) => (
          <SelectItem onPress={handlePress} key={item.name.common} value={item.name.common}>
            {item.name.common}
          </SelectItem>
        ))}
      </Select>
    </div>
  )
}

export default Country
