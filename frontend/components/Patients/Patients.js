import axios from "axios";
import { useMutation } from "react-query";

import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const baseURL = "http://localhost:4000/patients";

export default function Patients({ setProviderData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const mutation = useMutation((data) => {
    setProviderData(true);
    return axios.post(baseURL, data);
  });

  // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries(["todos"]);
  //   },
  // });

  const onSubmit = (data) => {
    mutation.mutate(data);
    onClose();
  };

  // Gets current day.
  //
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns month from 0 to 11
  const year = date.getFullYear();

  return (
    <>
      <Button onClick={onOpen} colorScheme="messenger" variant="outline" mb={6}>
        Add Patient
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader pl={0}>Patient Information</ModalHeader>
              <VStack spacing="1rem">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>First name:</FormLabel>
                      <Input
                        placeholder="First name"
                        id="firstName"
                        {...register("firstName")}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Last name:</FormLabel>
                      <Input
                        placeholder="Last name"
                        id="lastName"
                        {...register("lastName")}
                      />
                    </FormControl>
                  </GridItem>
                </Grid>

                <FormControl isRequired>
                  <FormLabel>Enter Date of Birth:</FormLabel>
                  <Input
                    placeholder="Select Date and Time"
                    type="date"
                    id="dob"
                    {...register("dob")}
                    max={`${year}-${month}-${day}`}
                  />
                </FormControl>
                <hr />
              </VStack>
              <ModalHeader pl={0}>Prescription Information</ModalHeader>
              <VStack spacing="1rem">
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Medication:</FormLabel>
                      <Input
                        placeholder="Medicine Name"
                        id="medicine"
                        {...register("medicine")}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Strength (mg):</FormLabel>
                      <NumberInput max={10000} min={10} step={10}>
                        <NumberInputField
                          id="strength"
                          {...register("strength")}
                        />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </GridItem>
                </Grid>

                <FormControl isRequired>
                  <FormLabel>Frequency (How often to take medicine)</FormLabel>
                  <Select id="frequency" {...register("frequency")}>
                    <option>Daily</option>
                    <option>Every Other Day</option>
                    <option>BID/b.i.d. (2x/Day)</option>
                    <option>TID/t.id. (3x/Day)</option>
                    <option>QID/q.i.d. (4x/Day)</option>
                    <option>QHS (every bedtime)</option>
                    <option>Q4h (every 4 hours)</option>
                    <option>Q4-6h (every 4 to 6 hours)</option>
                    <option>QWK (every week)</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Route (How to take medicine)</FormLabel>
                  <Select id="route" {...register("route")}>
                    <option>PO (by mouth)</option>
                    <option>PR (per rectum)</option>
                    <option>IM (intramuscular)</option>
                    <option>IV (intravenous)</option>
                    <option>ID (intradermal)</option>
                    <option>IN (intranasal)</option>
                    <option>TP (topical)</option>
                    <option>SL (sublingual)</option>
                    <option>BUCC (buccal)</option>
                    <option>IP (intraperitoneal)</option>
                  </Select>
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Progress</FormLabel>
                  <Select id="progress" {...register("progress")}>
                    <option>Pending</option>
                    <option disabled>WIP (work in progress)</option>
                    <option disabled>Filled</option>
                  </Select>
                </FormControl>
              </VStack>
              <Button
                colorScheme="messenger"
                mt={8}
                mr={3}
                isLoading={isSubmitting}
                type="submit"
              >
                Add Patient
              </Button>
            </form>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
