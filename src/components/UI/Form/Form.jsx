import { Button } from "../Button/Button";
import styles from "./Form.module.css";

export function Form({ children }) {
  return (
    <form className={styles.form}>
      {children}
      <Button theme="light">Submit</Button>
    </form>
  );
}

export function FormGroup({ label, id, value, setValue, type = "text" }) {
  return (
    <div className={`${styles.group} ${value ? styles.filled : ""}`}>
      <input
        type={type}
        id={id}
        name={id}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={label}
        aria-label={label}
      />
    </div>
  );
}
