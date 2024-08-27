import { DesignCard } from "../Card/Card";
import styles from "./DesignLinks.module.css";

export function DesignLinks({ className, links, large = false }) {
  return (
    <div className={`${className} ${styles["design-card_grid"]} ${large && styles.large} | container`}>
      {links.map((item) => {
        return <DesignCard {...item} key={crypto.randomUUID()} />;
      })}
    </div>
  );
}
