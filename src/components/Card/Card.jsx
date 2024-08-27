import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export function ProjectCard({ title, description, img }) {
  return (
    <div className={styles["project-card"]}>
      <img src={img} alt={`showcare of our product: ${title}`} />
      <div className={styles["project-card_body"]}>
        <h3 className="heading-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function DesignCard({ title, img, link,large }) {
  return (
    <Link to={link} className={`${styles["design-card"]} ${large && styles.large}`}>
      <picture>
        <source media="(min-width: 62rem)" srcSet={img.desktop} />
        <source media="(min-width: 38rem)" srcSet={img.tablet} />
        <img src={img.mobile} alt="design background" />
      </picture>

      <div className={styles.background}></div>

      <div className={styles["design-card_body"]}>
        <h2 className="heading-2">{title}</h2>
        <p>View projects <span>&#x2771;</span></p>
      </div>
    </Link>
  );
}
