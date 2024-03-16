import React from "react";
import ModalContainer from "./index";
import Image from "next/image";
import ic_type2 from '@/public/icons/ic-type2.svg';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  icon: any;
}

const ModalInsufficient = ({ isOpen, handleClose,icon }: Props) => {
  return (
    <ModalContainer isOpen={isOpen} handleClose={handleClose}>
      <div className="w-full h-[186px] bg-[#070814] border border-[#353539] rounded-lg flex items-center justify-center">
        <div>
          <div className="flex justify-center items-center space-x-4">
            <Image src={icon} alt="icon"/>
            <p className="text-[20px] font-bold text-[#fff]">
              Insufficients Balance!
            </p>
          </div>
          <button onClick={handleClose} className="bg-[#FDFDFD] btnRounded text-[#010214] flex items-center space-x-2 px-4 py-3 rounded-lg w-fit mx-auto mt-9">
            <span className="text-[#010214] text-base font-semibold">
              Got it, thanks!
            </span>
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ModalInsufficient;
