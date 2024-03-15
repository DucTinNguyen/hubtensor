import React from 'react'
import Card from "@/components/card";
import ic_type from "@/public/icons/ic-type.svg";
import ic_type2 from "@/public/icons/ic-type2.svg";
import ic_type3 from "@/public/icons/ic-type3.svg";
import ic_type4 from "@/public/icons/ic-type4.svg";

const Validator = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        icon_type={ic_type}
        price={0.49}
        cpu={4}
        gpu="GeForce RTX 4080"
        memory={16}
        storage="SSD 10GB"
        os="Ubuntu 20.0"
      />
      <Card
        icon_type={ic_type2}
        price={0.99}
        cpu={8}
        gpu="GeForce RTX 4090"
        memory={32}
        storage="SSD 50GB"
        os="Ubuntu 20.0"
      />
      <Card
        icon_type={ic_type3}
        price={1.49}
        cpu={16}
        gpu="NVIDIA A40"
        memory={64}
        storage="SSD 1280GB"
        os="Ubuntu 20.0"
      />
      <Card
        icon_type={ic_type4}
        price={1.99}
        cpu={24}
        gpu="NVIDIA A100"
        memory={128}
        storage="SSD 256GB"
        os="Ubuntu 20.0"
      />
      {/* <Card />
      <Card />
      <Card />       */}
    </div>
  )
}

export default Validator