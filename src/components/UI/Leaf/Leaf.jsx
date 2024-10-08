import styles from "./Leaf.module.css";
export function Leaf({ className }) {
  return (
    <>
      <svg
        width="1006"
        height="594"
        xmlns="http://www.w3.org/2000/svg"
        className={`${styles.leaf} ${className}`}>
        <path
          d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
          fill="#F1F3F5"
          fillRule="evenodd"
          opacity=".502"
        />
      </svg>
    </>
  );
}
