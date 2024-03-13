'use client'

import { columnsStaking } from '@/components/table/data'
import { RenderCell } from '@/components/table/render-cell'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'

const Staking = () => {
  return (
    <div className='p-5'>
      <div className=" w-full flex flex-col gap-4">
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columnsStaking}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align='center'
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={[]}>
            {(item) => (
              <TableRow>
                {(columnKey) => (
                  <TableCell>
                    {RenderCell({ user: item, columnKey: columnKey })}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Staking
