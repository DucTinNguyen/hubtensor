'use client'
import { AccountsIcon } from '@/components/icons/sidebar/accounts-icon'
import { ChevronUpIcon } from '@/components/icons/sidebar/chevron-up-icon'
import { CollapseItems } from '@/components/sidebar/collapse-items'
import { Accordion, AccordionItem } from '@nextui-org/react'
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import SettingCollapse from './setting-collapse'
import { CustomersIcon } from '@/components/icons/sidebar/customers-icon'
import { SettingsIcon } from '@/components/icons/sidebar/settings-icon'
import MyModal from '@/components/modal/qr'

const Setting = () => {

  const { address } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  return (

    <>
      <div className='p-6 flex flex-col gap-5'>
        <SettingCollapse icon={<AccountsIcon />} title='Account'>
          <div className="px-12">
            <p className='p-5 bg-green-200 text-black'>
              Use the wallet address below to fund your balance. Do not mine directly to this wallet.
            </p>
            <div>
              <p className='flex items-center space-x-14 py-4 border-b border-black'>
                <span className='font-bold'>Wallet</span>
                {address && <span>{'0x0bEC0736aA12C137b37fAd1CEFc1E324362F3795'}</span>}
              </p>
              <p className='flex items-center space-x-8 py-4'>
                <span className='font-bold'>Api Token</span>
                <span>93c86b89ffe807b15c9daaaa585567629e182c487b44913b5d1a5cd06771e7b6</span>
                <button onClick={() => { setIsOpen(true) }} className='bg-green-400 text-default-900 px-2 py-3 rounded'>Show QR</button>
              </p>
            </div>
          </div>
        </SettingCollapse>
        <SettingCollapse icon={<CustomersIcon />} title='Withdrawal address'>
          <div className="px-12">
            <input className='border border-zinc-500 w-full h-[44px] p-4 box-border rounded-lg' type='text' placeholder='Type withdraw address' />
          </div>
        </SettingCollapse>
        <SettingCollapse icon={<SettingsIcon />} title='SSH Public Key'>
          <div className="px-12">
            <textarea name="postContent" rows={4} className='w-full border border-zinc-500 rounded-lg p-4' />
          </div>
        </SettingCollapse>
      </div>

      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} value={"93c86b89ffe807b15c9daaaa585567629e182c487b44913b5d1a5cd06771e7b6"} />

    </>

  )
}

export default Setting
