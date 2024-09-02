import data from "../../data/aboutData.json";
import styles from "./About.module.css";
import { TwoColumns } from "../../components/TwoColumns/TwoColumns";
import { LocationLinks } from "../../components/LocationLinks/LocationLinks";
import { Leaf } from "../../components/UI/Leaf/Leaf";


export function About() {
  return (
    <>
      <div className="main">
        {/* HERO */} 
        <section
          className={`${styles["hero-container"]} | container`}
          aria-label="full-bleed"
          aria-labelledby="about-hero">
          <div className={`${styles.hero} | hero`}>
            {/* HERO IMG */}
            <picture className={styles["hero-img"]}>
              <source
                media="(min-width: 62rem)"
                srcSet={data.hero.img.desktop}
              />
              <source
                media="(min-width: 46.5rem)"
                srcSet={data.hero.img.tablet}
              />
              <img
                src={data.hero.img.mobile}
                alt="Multiple people around a table working on their laptop"
              />
            </picture>
            {/* HERO BODY */}
            <div className={styles["hero-body"]}>
              <h1 id="about-hero" className="heading-1">
                {data.hero.title}
              </h1>
              <p>{data.hero.subtitle}</p>
              {/* HERO BG PATTERN */}
              <picture className={styles["hero-pattern"]}>
                <source
                  media="(min-width: 46.5rem)"
                  srcSet={data.hero.bg_pattern.desktop}
                />
                <img
                  src={data.hero.bg_pattern.mobile}
                  alt="Multiple people around a table working on their laptop"
                />
              </picture>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <TwoColumns {...data.team} />
        {/* LOCATIONS */}
        <LocationLinks className={styles["locations-wrapper"]} />
        {/*BRANDING */}
        <TwoColumns {...data.branding} isReverse />



        {/* BG LEAFS */}
        {/* top leaf */}
        <Leaf className={styles["top-leaf"]} />
        {/* bottom leaf */}
        <Leaf className={styles["bottom-leaf"]} />
      </div>
    </>
  );
}
