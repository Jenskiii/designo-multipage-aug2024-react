import styles from "./LocationLinks.module.css";
import data from "../../data/aboutData.json";
import { Button } from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";

export function LocationLinks({className}) {
  return (
    <>
      <div className={`${styles["locations-wrapper"]} ${className} | container`}>
        {data.locations.map((item, index) => {
          return (
            <div key={index} className={styles["locations-col"]}>
              {/* image */}
              <div className={styles["locations-img"]}>
                <img
                  src={item.img}
                  alt={`image of a famous build inside of ${item.title}`}
                />
                <img
                  className={styles[`locations-bg_${index}`]}
                  src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                  alt="single circle"
                />
              </div>

              {/* title + button */}
              <h3 className="heading-3">{item.title}</h3>
              <Button AsComponent={Link} theme="dark" to={item.link}>
                See location
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
}
