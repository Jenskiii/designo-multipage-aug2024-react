import { Button } from "../Button/Button";
import { ErrorIcon } from "../svg/Svg";
import styles from "./Form.module.css";

export function Form({ children, formData, afterSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.textarea === ""
    ) {
    } else {
      window.location = "/home";
      afterSubmit(false);
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
      {children}
      <Button theme="light">Submit</Button>
    </form>
  );
}

export function FormGroup({
  label,
  id,
  value,
  setValue,
  afterSubmit,
  type = "text",
}) {
  return (
    <div className={`${styles.group} ${value ? styles.filled : ""}`}>
      <input
        type={type}
        id={id}
        name={id}
        onChange={setValue}
        value={value}
        placeholder={label}
        aria-label={label}
      />

      {afterSubmit && value === "" ? (
        <p>
          Can't be empty or invalid input
          <ErrorIcon />
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export function FormTextArea({ id, value, setValue, label, afterSubmit }) {
  return (
    <div className={`${styles.group} ${value ? styles.filled : ""}`}>
      <textarea
        name={id}
        id={id}
        onChange={setValue}
        value={value}
        placeholder={label}
        aria-label={label}></textarea>
      {afterSubmit && value === "" ? (
        <p>
          Can't be empty <ErrorIcon />
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
