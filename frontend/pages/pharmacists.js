import { useQuery, useMutation } from "react-query";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
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

// Will be modified for later use when we patch the progres of prescriptions
let baseID = "http://localhost:4000/prescriptions/";

export default function PharmacistsPage() {
  const [prescriptionData, setPrescriptionData] = useState(false);

  // useQuery, asynchronous source of data that's tied to a unique key(prescriptionData).
  // Can be used with any Promise based method (including GET and POST methods) to fetch data from a server.
  const { isLoading, refetch, isError, data, error } = useQuery(
    "prescriptionData",
    () => fetch(baseURL).then((res) => res.json())
  );

  // see line 60
  const mutation = useMutation((progress) => {
    setPrescriptionData(true);
    return axios.patch(baseID, progress);
  });

  // refetch data once pharmacists updates progress for each prescription
  useEffect(() => {
    if (prescriptionData) {
      setPrescriptionData(!prescriptionData);
      refetch();
    }
  }, [prescriptionData]);

  // Data is initially set to loading.
  if (isLoading) {
    return (
      <main className="main">
        <span>Loading...</span>
      </main>
    );
  }

  // If an error is thrown, this will be set. Otherwise it’s null if the fetch request is successful.
  if (isError) {
    return (
      <main className="main">
        <span>Error: {error.message}</span>
      </main>
    );
  }

  // Ran when pharmacist changes the select element.
  // Passes in event and unique id attached to each user.
  const setValue = (e, id) => {
    // update the baseID so that we're patching correct user.
    // localhost:4000/prescriptions/baseID
    baseID = baseID + id;
    let data = {
      progress: e.target.value,
      id,
    };
    // mutation - https://react-query-v3.tanstack.com/guides/mutations#_top
    // allows us to create/update/delete data
    setTimeout(() => {
      mutation.mutate(data);
    }, 10);
  };

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Pharmacists`} />
      <main className="main">
        <TableContainer>
          {/* Show table as long as there's data inside this array */}
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
                    // key helps us keep track of which items have been changed, added, or removed.
                    <tr key={id}>
                      <Td>{medicine}</Td>
                      <Td isNumeric>{strength}</Td>
                      <Td>{frequency}</Td>
                      <Td>{route}</Td>
                      {/* If progress === filled, don't allow pharmacist to edit the select option. */}
                      {progress !== "filled" ? (
                        <Td>
                          {/* Chrome defaults this field to background-color: unset.
                          Firefox does not.*/}
                          <select
                            placeholder=""
                            onChange={(e) => {
                              setValue(e, id);
                            }}
                            value={progress}
                            className="bg-unset"
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
