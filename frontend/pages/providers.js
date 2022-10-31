import { useQuery, useMutation } from "react-query";
import { useState, useEffect } from "react";

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
  const [providerData, setProviderData] = useState(false);

  const { isLoading, refetch, isError, data, error } = useQuery(
    "patientData",
    () => fetch(baseURL).then((res) => res.json())
  );

  useEffect(() => {
    if (providerData) {
      refetch();
      setProviderData(false);
    }
  }, [providerData]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // Cost of poor prescription writing === 1.3M injured & 7,000 deaths.
  // Source: https://medicalschoolhq.net/prescription-writing-101/

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Providers`} />
      <main className="main">
        <TableContainer>
          <Patients setProviderData={setProviderData} />
          {data.length > 0 && (
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
                {data?.map(({ id, firstName, lastName, dob }) => (
                  <tr key={id}>
                    <Td>{firstName}</Td>
                    <Td>{lastName}</Td>
                    <Td isNumeric>{dob}</Td>
                  </tr>
                ))}
              </Tbody>
            </Table>
          )}
        </TableContainer>
      </main>
    </>
  );
}
