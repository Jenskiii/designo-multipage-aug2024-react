import data from "../../data/homeData.json";
import { Button } from "../../components/UI/Button/Button";
import styles from "./Home.module.css";
import { DesignLinks } from "../../components/DesignLinks/DesignLinks";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="container"
        aria-label="full-bleed"
        aria-labelledby="home-hero">
        <div className={`${styles.hero} | hero`}>
          <img
            className={styles["hero-circle"]}
            src="/assets/home/desktop/bg-pattern-hero-home.svg"
            alt="round circle used for the background"
          />
          <div className={styles["hero-body"]}>
            <h1 id="home-hero" className="heading-1">
              {data.title}
            </h1>
            <p>{data.subtitle}</p>
            <Button AsComponent={Link} to="/about" theme="light">
              Learn more
            </Button>
          </div>
          <img
            src={data.hero_img}
            alt="Mobile phone with the text 'FRAME' inside"
          />
        </div>
      </section>

      {/* DESIGN LINKS */}
      <DesignLinks
        className={styles["design-links"]}
        links={data.photo_collage}
        large
      />

      {/* ILLUSTRATIONS */}
      <div className={`${styles.illustrations} | container`}>
        {data.illustration.map((item, index) => {
          return (
            <div
              className={styles["illustrations-col"]}
              key={crypto.randomUUID()}>
              <div className={styles["illustrations-img"]}>
                <img
                  src={item.img}
                  alt="showcase of man with working behind a desk"
                />
                <img
                  className={styles[`bg-pattern_${index}`]}
                  src="/assets/shared/desktop/bg-pattern-small-circle.svg"
                  alt="single circle"
                />
              </div>
              <div>
                <h3 className="heading-3">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
