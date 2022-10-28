import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import Tip from "../components/Tip/Tip";
import axios from "axios";
// Using axios > fetch: https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/

const baseURL = "http://localhost:4000/prescriptions";

export default function PharmacistsPage() {
  // Get prescription from patients...
  const [prescriptions, setPrescriptions] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Pharmacists`} />
      <main className="main">
        {/* See prescriptions and change prescription status'. */}
        <aside>
          <Tip text="Pharmacists ONLY" />
        </aside>
      </main>
    </>
  );
}
