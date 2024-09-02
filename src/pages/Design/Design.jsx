import { useParams } from "react-router-dom";
import designData from "../../data/designData.json";
import styles from "./Design.module.css";
import { ProjectCard } from "../../components/Card/Card";
import { DesignLinks } from "../../components/DesignLinks/DesignLinks";
import { Leaf } from "../../components/UI/Leaf/Leaf";
export function Design() {
  const { category } = useParams();
  const fData = designData[category];

  return (
    <>
      <div className="main">
        {/* hero */}
        <div className="container" aria-label="full-bleed">
          <div className={`${styles.hero} | hero`}>
            <img
              src={fData.bg_pattern}
              alt="6 circle pattern used for the background"
              className={category === "app" ? styles["app-bg_pattern"] : ""}
            />
            <h1 className="heading-1">{fData.title}</h1>
            <p>{fData.subtitle}</p>
          </div>
        </div>
        {/* project cards */}
        <div className={`${styles["project-card_grid"]} | container`}>
          {fData.products.map((product) => {
            return <ProjectCard {...product} key={crypto.randomUUID()} />;
          })}
        </div>
        {/* design Links */}
        <DesignLinks className={styles["design-links"]} links={fData.others} />

        {/* LEAF */}
        <Leaf className={styles.leaf} />
      </div>
    </>
  );
}
