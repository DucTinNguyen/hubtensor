import { useWeb3Modal } from '@web3modal/scaffold-react'
import React from 'react'
import { useAccount, useDisconnect } from 'wagmi'

const ButtonConnectWallet = ({ className }: { className : string}) => {

    const { open, close } = useWeb3Modal()
    const { disconnect } = useDisconnect()
    const { address } = useAccount();

    const sliceAddress = (address: string) => {
        if (address) return;
        return address.slice(0, 5) + '...' + address.slice(address.length - 5, address.length)
    }


    const handleClick = () => {
        if (address) {
            disconnect();
            return;
        }
        open({
            view: 'Connect'
        });
    }

    return (
        <div className={className}>
            <w3m-connect-button />
        </div>
        // <button onClick={handleClick}>
        //     {
        //         address ? sliceAddress(address) : 'Connect Wallet'
        //     }
        // </button>
    )
}

export default ButtonConnectWallet
