import { useQuery, useMutation } from "react-query";
import axios from "axios";
import Link from "next/link";
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
import Heading from "../components/Heading/Heading";

const baseURL = "http://localhost:4000/prescriptions";
let baseID = "http://localhost:4000/prescriptions/";
export default function PharmacistsPage() {
  const [prescriptionData, setPrescriptionData] = useState(false);

  const { isLoading, refetch, isError, data, error } = useQuery(
    "prescriptionData",
    () => fetch(baseURL).then((res) => res.json())
  );

  const mutation = useMutation((progress) => {
    setPrescriptionData(true);
    return axios.patch(baseID, progress);
  });

  useEffect(() => {
    if (prescriptionData) {
      refetch();
      setPrescriptionData(false);
    }
  }, [prescriptionData]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const setValue = (e, id) => {
    baseID = baseID + id;
    let data = {
      progress: e.target.value,
      id,
    };
    mutation.mutate(data);
  };

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Pharmacists`} />
      <main className="main">
        <TableContainer>
          {data.length > 0 ? (
            <Table variant="simple" colorScheme="blackAlpha">
              <TableCaption>
                Prescription Information (Pharmacists)
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Medicine</Th>
                  <Th>Strength (mg)</Th>
                  <Th>Frequency</Th>
                  <Th>Route</Th>
                  <Th>Progress</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map(
                  ({ id, medicine, strength, frequency, route, progress }) => (
                    <tr key={id}>
                      <Td>{medicine}</Td>
                      <Td isNumeric>{strength}</Td>
                      <Td>{frequency}</Td>
                      <Td>{route}</Td>
                      {progress !== "filled" ? (
                        <Td>
                          <select
                            placeholder=""
                            onChange={(e) => {
                              setValue(e, id);
                            }}
                            value={progress}
                          >
                            <option value="pending">Pending</option>
                            <option value="wip">WIP (work in progress)</option>
                            <option value="filled">Filled</option>
                          </select>
                        </Td>
                      ) : (
                        <Td>{progress}</Td>
                      )}
                    </tr>
                  )
                )}
              </Tbody>
            </Table>
          ) : (
            <h2>
              <Link href="/providers" style={{ textDecoration: "underline" }}>
                Talk to your nearest Provider
              </Link>
              , we currently do not have any patients
            </h2>
          )}
        </TableContainer>
      </main>
    </>
  );
}
