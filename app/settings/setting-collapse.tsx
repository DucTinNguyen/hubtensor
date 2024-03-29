import { ChevronUpIcon } from '@/components/icons/sidebar/chevron-up-icon'
import { Accordion, AccordionItem } from '@nextui-org/react'
import React from 'react'

interface Props {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode
}

const SettingCollapse = ({
    icon, title, children
}: Props) => {
  return (
    <div>
          <Accordion defaultSelectedKeys={'all'} className="px-0 rounded-xl">
              <AccordionItem
                  
                  indicator={<ChevronUpIcon />}
                  classNames={{
                      indicator: "data-[open=true]:-rotate-180",
                      trigger:
                          "py-0 min-h-[44px] bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",

                      title:
                          "px-0 flex text-base gap-2 h-full items-center cursor-pointer",
                  }}
                  aria-label="Accordion 1"
                  title={
                      <div className="flex flex-row gap-2">
                          <span>{icon}</span>
                          <span>{title}</span>
                      </div>
                  }
              >
                  {children}
                  
              </AccordionItem>
          </Accordion>
    </div>
  )
}

export default SettingCollapse
