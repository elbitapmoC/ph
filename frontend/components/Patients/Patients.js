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
  Radio,
  RadioGroup,
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
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Patients() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.table(data);
    onClose();
  };

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

                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Month</FormLabel>
                      <NumberInput max={12} min={1}>
                        <NumberInputField id="month" {...register("month")} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Day</FormLabel>
                      <NumberInput max={31} min={1} id="day">
                        <NumberInputField {...register("day")} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </GridItem>
                  <GridItem w="100%">
                    <FormControl isRequired>
                      <FormLabel>Year</FormLabel>
                      <NumberInput max={2023} min={1920}>
                        <NumberInputField id="year" {...register("year")} />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </FormControl>
                  </GridItem>
                </Grid>
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
                      <NumberInput max={3000} min={10}>
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
                  <FormLabel>Frequency</FormLabel>
                  <Select
                    placeholder="How often to take medicine"
                    id="frequency"
                    {...register("frequency")}
                  >
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
                  <FormLabel>Route</FormLabel>
                  <Select
                    placeholder="How to take medicine"
                    id="route"
                    {...register("route")}
                  >
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

                  <RadioGroup
                    defaultValue="1"
                    id="progress"
                    {...register("progress")}
                  >
                    <Stack spacing={4} direction="row">
                      <Radio value="1">Pending</Radio>
                      <Radio value="2" isDisabled>
                        WIP (work in progress)
                      </Radio>
                      <Radio value="3" isDisabled>
                        Filled
                      </Radio>
                    </Stack>
                  </RadioGroup>
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