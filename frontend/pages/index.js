import Heading from "../components/Heading/Heading";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";
import Pill from "../components/Pill/Pill";
import Tip from "../components/Tip/Tip";
import { Grid, GridItem } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Heading title={`Photon Health | ${String.fromCodePoint(0x2624)}`} />
      <main className="main">
        <aside>
          <Subtitle text="next-gen prescriptions" />
          <Title text="Photon Health Dashboard" />

          <Grid templateColumns="repeat(2, 1fr)" gap={6} className="mb-16">
            <GridItem w="100%">
              <Link href="providers">
                <Pill
                  text="Provider"
                  label="Create new patients & write prescriptions.
                See patients and their previously written prescription status'."
                  position="left"
                  imgSource="/images/provider.jpg"
                />
              </Link>
            </GridItem>
            <GridItem w="100%">
              <Link href="/pharmacists">
                <Pill
                  text="Pharmacist"
                  label="See prescriptions and change prescription status'."
                  position="right"
                  imgSource="/images/pharmacist.jpg"
                />
              </Link>
            </GridItem>
          </Grid>

          <Tip text="Hover over pills for details" />
        </aside>
      </main>
    </>
  );
}
