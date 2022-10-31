import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import styles from "./Pill.module.scss";

const Pill = ({ text, label, position, imgSource, imgAlt }) => {
  return (
    <section className="flex items-center flex-col">
      {/* For placement options look at: https://chakra-ui.com/docs/components/tooltip */}
      <Tooltip hasArrow label={label} placement={position}>
        <span className="width-auto height-auto">
          <Image
            src={imgSource}
            alt={imgAlt}
            className={`${styles.pill} mb-8`}
            width="134"
            height="278"
            layout="responsive"
            priority
          ></Image>
        </span>
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
