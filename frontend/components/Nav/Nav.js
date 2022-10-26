import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image
          src="/icons/ph-logo.svg"
          alt="Logo, Photon Health"
          height={30}
          width={140}
        />
      </Link>
    </nav>
  );
};

export default Nav;
