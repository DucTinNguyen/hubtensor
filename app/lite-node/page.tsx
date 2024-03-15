import Card from '@/components/card'
import React from 'react'
import ic_type from '@/public/icons/ic-type.svg';

const LightNode = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        icon_type={ic_type}
        price={0.39}
        cpu={4}
        gpu="None"
        memory={16}
        storage="SSD 60GB"
        os="Ubuntu 20.0"
      />
    </div>
  )
}

export default LightNode