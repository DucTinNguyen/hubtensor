'use client'
import { Card, CardBody } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import TableBill from './tableBill'


const IndexBilling = () => {
  return (
    <div>
          <Card className="xl:max-w-sm bg-default-50 rounded-xl shadow-md px-3 w-full">
              <CardBody className="py-5">
                  <div className='p-4'>
                      <p className='p-2 border-b border-[#e8e8e8] text-default-900 flex items-center justify-between'>
                          <span className='font-bold'>Pending reward</span>
                          <span>$0.0</span>
                      </p>
                      <p className='p-2 border-b border-[#e8e8e8] text-default-900 flex items-center justify-between'>
                          <span className='font-bold'>Account balance</span>
                          <span>$0.0</span>
                      </p>
                  </div>
              </CardBody>
          </Card>
          <div className="flex flex-col justify-center w-full py-5 px-4 lg:px-0  max-w-[90rem] mx-auto gap-3">
              <div className="flex  flex-wrap justify-between">
                  <h3 className="text-center text-xl font-semibold">Transaction history</h3>
              </div>
              <TableBill />
          </div>
    </div>
  )
}

export default IndexBilling
