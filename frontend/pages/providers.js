import Heading from "../components/Heading/Heading";
import Tip from "../components/Tip/Tip";

export default function ProvidersPage() {
  return (
    <>
      <Heading title={`${String.fromCodePoint(0x2624)} | Providers`} />
      <main className="main">
        <aside>
          <Tip text="Providers ONLY" />
        </aside>
      </main>
    </>
  );
}
