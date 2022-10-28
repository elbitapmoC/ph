import {
  FormControl,
  FormLabel,
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
              <FormLabel>Medication:</FormLabel>
              <Input placeholder="Medicine Name" />
            </FormControl>
          </GridItem>
          <GridItem w="100%">
            <FormControl isRequired>
              <FormLabel>Strength (mg):</FormLabel>
              <NumberInput max={3000} min={10}>
                <NumberInputField />
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
          <Select placeholder="How often to take medicine">
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
          <Select placeholder="How to take medicine">
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

        <FormControl isDisabled>
          <FormLabel>Progress</FormLabel>
          <Select
            placeholder="Prescription Fulfillment Status"
            defaultValue="pending"
          >
            <option value="pending">Pending</option>
            <option value="wip">WIP (Work in Progress)</option>
            <option value="filled">Filled</option>
          </Select>
        </FormControl>
      </VStack>
    </>
  );
};

export default PatientForm;
