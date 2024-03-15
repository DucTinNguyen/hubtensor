"use client";
import React from "react";
import { Columns } from "./type";

interface PropsTable<T> {
  columns: Array<Columns<T>>;
  data: T[];
  className?: string;
}

const TableComponent = <T,>({ columns, data, className }: PropsTable<T>) => {
  const headers = columns.map((column, index) => {
    return (
      <>
        {column.renderColumns ? (
          column.renderColumns(column)
        ) : (
            <p key={index} className='flex-auto text-[#6C3BEF] text-sm font-semibold flex items-center justify-center'>{column.name}</p>
        )}
      </>
    );
  });

  const rows =
    data.length === 0 ? (
      <p className="text-white text-center mt-4 h-[56px] border border-[#353539] flex items-center justify-center">No data</p>
    ) : (
      data.map((item) => {
        return (
          <div className="flex items-center text-[#FDFDFD] text-sm font-normal border border-[#353539] h-[56px]">
            {columns.map((column, index) => {
              const value = column.render
                ? column.render(column, item)
                : (item[column.key as keyof typeof item] as string);

              return (
                <>
                  {column.render ? column.render(column, item) : <p>{value}</p>}
                </>
              );
            })}
          </div>
        );
      })
    );

  return (
    <div className={`${className} flex flex-col`}>
      <div
        className={`h-[58px] border border-[#353539] flex items-center`}
      >
        {headers}
      </div>
      <div className="flex w-full overflow-x-auto flex-col">
        {rows}
      </div>
    </div>
  );
};

export default TableComponent;
