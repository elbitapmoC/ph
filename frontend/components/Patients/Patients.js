import MedicalForm from "./MedicalForm";
import PatientForm from "./PatientForm";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Patients() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Unique ID / Key - Patient’s name and another identifier, usually date of birth.
  return (
    <>
      <Button onClick={onOpen} colorScheme="messenger" variant="outline" mb={4}>
        Add Patient
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ModalHeader pl={0}>Patient Information</ModalHeader>
            <PatientForm />
            <ModalHeader pl={0}>Prescription Information</ModalHeader>
            <MedicalForm />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="messenger" mr={3}>
              Add Patient
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
