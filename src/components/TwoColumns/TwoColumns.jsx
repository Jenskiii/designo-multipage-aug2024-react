import styles from "./TwoColumns.module.css";

export function TwoColumns({
  title,
  img,
  bg_pattern,
  paragraph1,
  paragraph2,
  isReverse = false,
}) {
  return (
    <>
      <div className="container" aria-label="full-bleed">
        <div
          className={`${styles["two-columns"]} ${isReverse && styles.reverse}`}>
          {/* img */}
          <picture className={styles["two-columns_img"]}>
            <source media="(min-width: 62rem)" srcSet={img.desktop} />
            <source media="(min-width: 32rem)" srcSet={img.tablet} />
            <img
              src={img.mobile}
              alt="Female hand hanging a picture on the wall"
            />
          </picture>
          
          {/* body */}
          <div className={`${styles["two-columns_body"]} | container`}>
            <h2 className="heading-2">{title}</h2>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <img
              className={styles["two-columns_bg"]}
              src={bg_pattern}
              alt="circles in the background"
            />
          </div>
        </div>
      </div>
    </>
  );
}
