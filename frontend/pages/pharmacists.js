import { useEffect, useState } from "react";
import Heading from "../components/Heading/Heading";
import Tip from "../components/Tip/Tip";
import axios from "axios";

export default function PharmacistsPage() {
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
