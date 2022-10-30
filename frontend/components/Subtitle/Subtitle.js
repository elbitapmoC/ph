import styles from "./Subtitle.module.css";

const Subtitle = ({ text }) => {
  return <p className="red uppercase font-bold text-sm mb-4">{text}</p>;
};

export default Subtitle;
