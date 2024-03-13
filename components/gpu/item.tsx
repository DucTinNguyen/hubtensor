'use client'
import { Card, CardBody, Input, Select, SelectItem } from '@nextui-org/react'
import Image from 'next/image';
import React, { useState } from 'react'
import ModalOpen from '../modal';
import ButtonConnectWallet from '../btn-connect';
import { useAccount } from 'wagmi';

interface Product {
    item: {
        processor: string;
        architecture: string;
        cores: number;
        ram: string;
        disk: string;
        gpu: string;
        number_gpu: number;
        vram: string;
        net: string;
        id: string;
        location: {
            flag: string;
            name: string;
        },
        reliability: string;
        price: string;
        total_price: number;
        ai_score: string;
    }

}

const Label = ({ title, value, className }: {
    title: string,
    value: string | React.ReactNode,
    className: string
}) => {
    return (
        <p className={`${className} px-2 py-1 text-xs rounded`}>
            <span>{title}</span>
            <span>{value}</span>
        </p>
    )
}


const images = [
    {
        name: 'Ubuntu 18.04 LTS'
    },
    {
        name: 'Ubuntu 14.04 LTS'
    },
    {
        name: 'Ubuntu 20.04 LTS'
    },
    {
        name: 'Ubuntu 22.04 LTS'
    },


]

const ItemGPU = ({ item }: Product) => {

    const [show, setShow] = useState(true);
    const { address } = useAccount();
    return (
        <Card className={`
        
         w-full bg-default-50 rounded-xl shadow-md px-3 transition-all`}>
            <CardBody className="py-5 flex flex-col space-y-4">
                <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <Label title='CPU: ' value={item.processor} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='ARCH: ' value={item.architecture} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='Core:' value={item.cores} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='RAM: ' value={item.ram} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='DISK: ' value={item.disk} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='GPU: ' value={item.number_gpu} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                        <Label title='NET: ' value={item.net} className='bg-[#FFE089] text-[rgba(0,0,0,0.7)] w-fit' />
                    </div>
                    <div className='w-[500px] flex items-cente justify-end gap-2'>
                        <Label title='' value={item.gpu} className='bg-[#49C68D] text-[#fff] w-fit' />
                        <Label title='' value={item.vram} className='bg-[#49C68D] text-[#fff] w-fit' />
                    </div>
                </div>

                <div className='flex items-center gap-3 flex-wrap'>
                    <span className='border border-[#cdcdcd] text-default-900  px-3 py-1 text-xs rounded'># {item.id}</span>
                    <p className='flex items-center space-x-2 border border-[#cdcdcd] text-default-900  px-3 py-1 text-xs rounded'>
                        <span>Location:</span>
                        <Image src={item.location.flag} loader={() => item.location.flag} alt='icon' width={20} height={20} />
                        <span>{item.location.name}</span>
                    </p>
                    <p className='border border-[#cdcdcd] text-default-900  px-3 py-1 text-xs rounded'>
                        NET: {item.net} Mbit/s
                    </p>
                    <p className='border border-[#cdcdcd] text-default-900  px-3 py-1 text-xs rounded '>
                        Price: <span className='text-danger'>{(item.total_price * 360).toFixed(2)}$/month</span>
                    </p>
                </div>
                <div>
                    <button onClick={() => { setShow(!show) }} className='bg-primary w-full text-left text-white px-2 py-1 text-sm'>Configuration and renting</button>
                    {<div className={` ${show ? 'h-[142px]' : 'h-0 opacity-0 overflow-hidden'} transition-all ease-linear duration-150 bg-primary-100 h-fit p-4 flex justify-between `}>
                        <div>
                            <div className='flex items-center gap-2'>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-xs'>Image</span>
                                    <span className='text-xs'>Disk space to allocate in GB</span>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <select className='border border-[#cdcdcd] text-sm'>
                                        {images.map((item) => {
                                            return <option value={item.name}>{item.name}</option>;
                                        })}
                                    </select>
                                    <input type='number' step={1} className='border border-[#cdcdcd] px-2' />
                                </div>


                            </div>
                            <div className='flex items-center justify-center mt-3'>

                                {address ? <ModalOpen title='Confirm and rent' /> : <ButtonConnectWallet className='flex items-center justify-center' />}
                            </div>

                        </div>

                        <div className='bg-[rgb(15_23_42/0.3)] w-[350px]'>
                            <p className='text-sm border-b border-[#cdcdcd] p-2 flex justify-between items-center'>
                                <span>Base per hour</span>
                                <span>$10</span>
                            </p>
                            <p className='text-sm border-b border-[#cdcdcd] p-2 flex justify-between items-center'>
                                <span>Storage per GB per hour</span>
                                <span>$0</span>
                            </p>
                            <p className='text-sm border-b border-[#cdcdcd] p-2 flex justify-between items-center'>
                                <span>Traffic per GB</span>
                                <span>$0.01</span>
                            </p>
                        </div>

                    </div>}
                </div>
            </CardBody>
        </Card>
    )
}

export default ItemGPU
