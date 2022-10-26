import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Thanks for looking around the code.
      You can't have a complete web app... Unless it has a footer.
      This was a necessary step. :)
    */}
      <a
        href="https://github.com/elbitapmoc"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          {/* Essentially, Image does the heavy lifting of optimizing images for us.*/}
          <p>&copy; elbitapmoC | 2022</p>
        </span>
      </a>
    </footer>
  );
};

export default Footer;
