import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import Tip from "../components/Tip/Tip";
import axios from "axios";

const baseURL = "http://localhost:4000/";

export default function PharmacistsPage() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      // setPost(response);
    });
  }, []);

  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Pharmacists`} />
      <main className="main">
        <aside>
          <Tip text="Pharmacists ONLY" />
        </aside>
      </main>
    </>
  );
}
