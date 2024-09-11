"use client";

import { FaTrashAlt } from "react-icons/fa";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import React from "react";

interface ModaProps {
  isOpen?: boolean;
  id?: string;
  onRequestClose?: () => void;
  delet: () => void;
}

export default function ModalV1(props: ModaProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={props.isOpen} onOpenChange={props.onRequestClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  justify-start gap-1">
                <FaTrashAlt className="w-11 h-7 text-red-600" />
                <span>Deletar</span>
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Desejas Excluir O Excluir Produto ?
                </p>
              </ModalBody>
              <ModalFooter className="flex justify-center ">
                <Button
                  onClick={props.delet}
                  variant="light"
                  className="bg-red-600 text-white"
                >
                  Sim
                </Button>
                <Button color="primary" onPress={onClose}>
                  Não
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
