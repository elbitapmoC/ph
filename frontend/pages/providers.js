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
        <TableContainer style={{ position: "relative" }}>
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
                {/* 
                daily (no abbreviation)
                every other day (no abbreviation)
                BID/b.i.d. (twice a day)
                TID/t.id. (three times a day)
                QID/q.i.d. (four times a day)
                QHS (every bedtime)
                Q4h (every 4 hours)
                Q4-6h (every 4 to 6 hours)
                QWK (every week) 
                */}

                <Th>Route</Th>
                {/* 
                PO (by mouth)
                PR (per rectum)
                IM (intramuscular)
                IV (intravenous)
                ID (intradermal)
                IN (intranasal)
                TP (topical)
                SL (sublingual)
                BUCC (buccal)
                IP (intraperitoneal)
                */}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </main>
    </>
  );
}
