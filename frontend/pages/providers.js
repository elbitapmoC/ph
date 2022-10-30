import { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Patients from "../components/Patients/Patients";
import Heading from "../components/Heading/Heading";

const baseURL = "http://localhost:4000/patients";

export default function ProvidersPage() {
  const [patients, setPatients] = useState(null);

  // ✅ - Load all from the backend.
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  }, []);

  // Cost of poor prescription writing === 1.3M injured & 7,000 deaths.
  // Source: https://medicalschoolhq.net/prescription-writing-101/

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Providers`} />
      <main className="main">
        <TableContainer>
          <Patients />
          <Table variant="simple" colorScheme="blackAlpha">
            <TableCaption>Patient Information (Providers)</TableCaption>
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Date of Birth</Th>
                <Th>Medication</Th>
                <Th isNumeric>Strength (mg)</Th>
                <Th>Frequency</Th>
                <Th>Route</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Crash</Td>
                <Td>Bandicoot</Td>
                <Td isNumeric>09/09/1996</Td>
                <Td>Apples</Td>
                <Td>50</Td>
                <Td>Daily</Td>
                <Td>Oral</Td>
                <Td>Pending</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
}
