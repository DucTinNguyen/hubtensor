
import React from 'react'
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Modal } from "@nextui-org/react";
import { useAccount } from 'wagmi';


interface Modal {
    title: string
}

const ModalOpen = ({ title }: Modal) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();




    return (
        <>
            <Button style={{ marginTop: 'auto' }} className='bg-primary-200' onPress={onOpen}>{title}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody>
                                Insufficient Balance!
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalOpen
