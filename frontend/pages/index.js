import Heading from "../components/Heading/Heading";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Subtitle from "../components/Subtitle/Subtitle";
import Title from "../components/Title/Title";
import Pill from "../components/Pill/Pill";
import Tip from "../components/Tip/Tip";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Home() {
  return (
    <section className="container">
      <Heading />
      <Nav />
      <main className="main">
        <aside>
          <Subtitle text="next-gen prescriptions" />
          <Title text="Photon Health Dashboard" />

          <Grid templateColumns="repeat(2, 1fr)" gap={6} className="mb-20">
            <GridItem w="100%">
              <Pill text="Provider" />
            </GridItem>
            <GridItem w="100%">
              <Pill text="Pharmacist" />
            </GridItem>
          </Grid>

          <Tip text="Hover over pills for details.." />
        </aside>
      </main>
      <Footer />
    </section>
  );
}
