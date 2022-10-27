import Heading from "../components/Heading/Heading";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Tip from "../components/Tip/Tip";

export default function providers() {
  return (
    <section className="container">
      <Heading />
      <Nav />
      <main className="main">
        <aside>
          <Tip text="Providers ONLY" />
        </aside>
      </main>
      <Footer />
    </section>
  );
}
