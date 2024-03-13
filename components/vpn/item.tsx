'use client'
import React from 'react'
import { CardBalance2 } from '../home/card-balance2'
import { Button, Card, CardBody } from '@nextui-org/react'
import { Community } from '../icons/community'
import Image from 'next/image'
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import ModalOpen from '../modal'
import { useAccount } from 'wagmi'
import ButtonConnectWallet from '../btn-connect'


type ItemVPN = {
    item: {
        id: number,
        uuid: number,
        location: string,
        net: string,
        price: string,
        flag: string
    }

}

export const types = [
    { label: "Wireguard", value: "Wireguard" },
    { label: "Shadowsocks V2Ray", value: "Shadowsocks V2Ray" },
    { label: "OpenVPN", value: "OpenVPN" }
]
const VPNItem = ({ item }: ItemVPN) => {

    const { address } = useAccount();

    console.log(item.price)

    return (
        <Card className="w-full bg-default-50 rounded-xl shadow-md px-3 w-full">
            <CardBody className="py-5 flex flex-col gap-4 relative">
                <div className='flex items-center gap-3 flex-wrap'>
                    <span className='border border-[#cdcdcd] text-default-900 px-3 py-1 text-xs rounded'># {item.uuid}</span>
                    <p className='flex items-center space-x-2 border border-[#cdcdcd] text-default-900 px-3 py-1 text-xs rounded'>
                        <span>Location:</span>
                        <Image src={item.flag} loader={() => item.flag} alt='icon' width={20} height={20} />
                        <span>{item.location}</span>
                    </p>
                    <p className='border border-[#cdcdcd] text-default-900 px-3 py-1 text-xs rounded'>
                        NET: {item.net} Mbit/s
                    </p>
                    <p className='border border-[#cdcdcd] text-default-900 px-3 py-1 text-xs rounded '>
                        Price: <span>{Math.ceil(Number(item.price) * 1000)}</span>$/TB

                    </p>
                </div>
                <div className='flex justify-center items-center space-x-2 mb-2'>
                    <Select
                        label="Choose VPN Type"
                        className="max-w-[200px]"
                    >
                        {types.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </Select>

                </div>

                {address ? <ModalOpen title='Create' /> : <ButtonConnectWallet className='flex items-center justify-center' />}
            </CardBody>
        </Card>
    )
}

export default VPNItem
