'use client'
import React, { useState } from "react";
import ic_plus from "@/public/icons/plus.svg";
import Image from "next/image";
import TableComponent from "@/components/table";

import ic_credit from "@/icon/ic_credit.svg";
import ic_billing from "@/icon/ic_billing.svg";
import { Columns } from "@/components/table/type";
import ModalCredit from "@/components/modal/modal-credit";

type Credit = {
  id: string;
  tx: string;
  credit: string;
  date: string;
};

type Billing = {
  id: string;
  node: string;
  duration: string;
  credit: string;
  date: string;
};
const columnsCredit: Array<Columns<Credit>> = [
  {
    key: "id",
    name: "#",
  },
  {
    key: "tx",
    name: "TX",
  },
  {
    key: "credit",
    name: "Credit",
  },
  {
    key: "date",
    name: "Date",
  },
];

const columnsBill: Array<Columns<Billing>> = [
  {
    key: "id",
    name: "#",
  },
  {
    key: "node",
    name: "Node",
  },
  {
    key: "duration",
    name: "Duration",
  },
  {
    key: "date",
    name: "Date",
  },
];

const Billing = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-col lg:gap-10">
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-[#FDFDFD] btnRounded text-[#010214] flex items-center space-x-2 px-4 py-3 rounded-lg w-fit"
      >
        <Image src={ic_plus} alt="icon" className="w-5 h-5 min-w-5" />
        <span>Add Credits</span>
      </button>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <Image src={ic_credit} alt="icon" className="w-8 h-8 min-w-8" />
          <span className="text-[24px] font-semibold text-[#FFFFFF]">Node</span>
        </div>
        <TableComponent
          className="w-[720px]"
          columns={columnsCredit}
          data={[]}
        />
      </div>
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-4">
          <Image src={ic_billing} alt="icon" className="w-8 h-8 min-w-8" />
          <span className="text-[24px] font-semibold text-[#FFFFFF]">
            Subnet
          </span>
        </div>
        <TableComponent className="w-[720px]" columns={columnsBill} data={[]} />
      </div>
      <ModalCredit
        isOpen={open}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};

export default Billing;
