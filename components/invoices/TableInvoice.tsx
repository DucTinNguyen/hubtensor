import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import React from 'react'
import { columnsInvoice } from '../table/data'
import { RenderCell } from '../table/render-cell'

const TableInvoice = () => {
  return (
      <div className=" w-full flex flex-col gap-4">
          <Table aria-label="Example table with custom cells">
              <TableHeader columns={columnsInvoice}>
                  {(column) => (
                      <TableColumn
                          key={column.uid}
                          hideHeader={column.uid === "actions"}
                          align={column.uid === "actions" ? "center" : "start"}
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
  )
}

export default TableInvoice
