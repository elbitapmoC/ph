import { Tooltip } from "@chakra-ui/react";
import styles from "./Pill.module.scss";

const Pill = ({ text, label, position, imgSource }) => {
  return (
    <section className="flex items-center flex-col">
      {/* For placement options look at: https://chakra-ui.com/docs/components/tooltip */}
      <Tooltip hasArrow label={label} placement={position}>
        <img src={imgSource} alt="" className={`${styles.pill} mb-8`}></img>
      </Tooltip>
      <span className="font-light text-xl">{text}</span>
    </section>
  );
};

Pill.defaultProps = {
  label: "Ace",
  position: "top",
};

export default Pill;
