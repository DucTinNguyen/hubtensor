'use client'
import React, { EventHandler, FormEvent, useState, useTransition } from "react";
import ModalContainer from "./index";

import bgCredit from "@/images/popup/credit/credit.png";
import Image from "next/image";
import ic_x from "@/icon/ic_x.svg";
import axios from "axios";
import Loading from "../loading/loading";
import { useRouter } from "next/navigation";
interface Props {
    isOpen: boolean;
    handleClose: () => void;
}

const ModalCredit = ({ isOpen, handleClose }: Props) => {

    const [amount, setAmount] = useState(0);

    const [isPending, startTransition] = useTransition();

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    }

    const router = useRouter();


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("x-api-key", "PDADBJ9-4474SDJ-KVGBNK1-5YXE80V");
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "price_amount": amount,
            "price_currency": "ETH",
            "order_id": "RGDBP-21314",
            "order_description": "Apple Macbook Pro 2019 x 1",
            "ipn_callback_url": "https://nowpayments.io",
            "success_url": "https://nowpayments.io",
            "cancel_url": "https://nowpayments.io"
        });

        const requestOptions: any = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        startTransition(() => {
            fetch("https://api.nowpayments.io/v1/invoice", requestOptions)
                .then((response) => response.text())
                .then((result: any) => {
                    window.open(JSON.parse(result).invoice_url, "_blank");
                    handleClose();
                })
                .catch((error) => console.error(error));
        })
        
    }

    return (
        <ModalContainer isOpen={isOpen} handleClose={handleClose}>
            <div className="w-full h-[300px] relative p-4">
                <Image src={bgCredit} alt="bg" fill priority />
                <div className="relative flex flex-col gap-4">
                    <figure onClick={handleClose} className="flex justify-end cursor-pointer">
                        <Image src={ic_x} alt="icon" />
                    </figure>
                    <p className="text-base font-semibold text-[#fff]">
                        Credit amount (USD)
                    </p>
                    <form onSubmit={onSubmit} className="flex flex-col gap-[10px]">
                        <input
                            step={0.1}
                            onChange={handleChangeAmount}
                            type="number"
                            placeholder="1 Credit = 1 USD (all credits are non-refundable)"
                            className="w-full placeholder:text-sm appearance-none p-4 outline-none h-[44px] border border-[#353539] placeholder:font-normal placeholder:text-[#918DA4] bg-[#0D0E10] rounded-lg text-[#FDFDFD] font-semibold text-base"
                        />

                        <p className="text-[#918DA4] text-sm font-normal">{'*Note: Amount must be >= 0.5 ETH'}</p>
                        <button
                            type="submit"
                            disabled={!amount || amount < 0.5}
                            className="bg-[#FDFDFD] w-[202px] mt-2 mx-auto btnRounded text-[#010214] font-semibold flex items-center justify-center space-x-2 px-4 py-3 rounded-lg">
                            {
                                isPending ? <Loading /> : "Continue Payment"
                            }
                        </button>
                    </form>
                </div>
            </div>
        </ModalContainer>
    );
};

export default ModalCredit;
