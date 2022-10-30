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
} from "@chakra-ui/react";
import Patients from "../components/Patients/Patients";
import Heading from "../components/Heading/Heading";

const baseURL = "http://localhost:4000/patients";

export default function ProvidersPage() {
  const [patients, setPatients] = useState([]);

  // ✅ - Load all from the backend.
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPatients(response.data);
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
          {patients.length > 0 && (
            <Table variant="simple" colorScheme="blackAlpha">
              <TableCaption>Patient Information (Providers)</TableCaption>
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Date of Birth</Th>
                </Tr>
              </Thead>
              <Tbody>
                {patients?.map(
                  ({ id, firstName, lastName, month, day, year }) => (
                    <tr key={id}>
                      <Td>{firstName}</Td>
                      <Td>{lastName}</Td>
                      <Td isNumeric>
                        {month}/{day}/{year}
                      </Td>
                    </tr>
                  )
                )}
              </Tbody>
            </Table>
          )}
        </TableContainer>
      </main>
    </>
  );
}
