import data from "../../data/locationsData.json";
import styles from "./Locations.module.css";

export function Locations() {
  return (
    <>
      <div className={styles.wrapper}>
        {data.branches.map((card, index) => {
          return (
            <div className={styles["card-container"]} key={index}>
              {/* img */}
              <picture>
                <source
                  media="(min-width: 38rem) and (max-width: 62rem)"
                  srcSet={card.img.tablet}
                />
                <img
                  className={styles["card-img"]}
                  src={card.img.small}
                  alt={`map of our company in ${card.title}`}
                />
              </picture>
              {/* CARD */}
              <div
                className={`${styles.card} ${
                  index % 2 === 0 ? styles.uneven : ""
                }`}>
                {/* title */}
                <h2 className="heading-2">{card.title}</h2>

                {/* informations */}
                <div className={styles["card-information"]}>
                  {/* address */}
                  <div>
                    <h3>{card.company}</h3>
                    <p>{card.address.street}</p>
                    <p>{card.address.zipcode}</p>
                  </div>
                  {/* contact */}
                  <div>
                    <h3>Contact</h3>
                    <p>P: {card.contact.phone}</p>
                    <p>M: {card.contact.email}</p>
                  </div>
                </div>
                <img
                  src={card.bg_pattern}
                  alt="3 circles used for the background"
                  className={styles["card-bg_pattern"]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
