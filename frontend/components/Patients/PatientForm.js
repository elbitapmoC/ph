import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Input,
  VStack,
  Grid,
  GridItem,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

const PatientForm = () => {
  return (
    <>
      <VStack spacing="1rem">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <FormControl isRequired>
              <FormLabel>First name:</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
          </GridItem>
          <GridItem w="100%">
            <FormControl isRequired>
              <FormLabel>Last name:</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%">
            <FormControl isRequired>
              <FormLabel>Day</FormLabel>
              <NumberInput max={31} min={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </GridItem>
          <GridItem w="100%">
            <FormControl isRequired>
              <FormLabel>Month</FormLabel>
              <NumberInput max={12} min={1}>
                <NumberInputField />
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
                <NumberInputField />
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
    </>
  );
};

export default PatientForm;
