import { Navigation } from "../Navigation/Navigation";
import styles from "./Footer.module.css";
import data from "../../data/sharedData.json";
import { Socials } from "../UI/svg/Svg";
import { Button } from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useLink } from "../../hooks/useLink";

export function Footer({ withFunnel = true }) {

  return (
    <footer
      className={`${styles.footer}  ${!withFunnel ? styles["no_funnel"] : ""}`}>
        
      <div className="container">
        {/* FUNNEL , can toggle visibilty based on boolean */}
        {withFunnel && (
          <div className={styles["funnel_wrapper"]}>
            <div className={styles.funnel}>
              <div>
                <h3 className="heading-2">{data.footer.funnel.title}</h3>
                <p>{data.footer.funnel.text}</p>
              </div>
              <Button {...useLink("/contact")} AsComponent={Link} theme="light">
                Get in touch
              </Button>
            </div>
          </div>
        )}

        {/* GRID */}
        <div className={styles.grid}>
          {/* LOGO */}
          <img
            className="logo"
            src={data.footer.logo}
            alt="Logo of the company 'designo' "
          />
          <hr />
          {/* NAV */}
          <Navigation />
          {/* CONTACT */}
          <div className={styles.contact}>
            <div className={`${styles.col1} | ${styles.column}`}>
              <h4>{data.footer.company}</h4>
              <p>{data.footer.address.street}</p>
              <p>{data.footer.address.zipcode}</p>
            </div>
            <div className={`${styles.col2} | ${styles.column}`}>
              <h4>Contact Us (Central Office)</h4>
              <p>P : {data.footer.contact.phone}</p>
              <p>M : {data.footer.contact.email}</p>
            </div>
          </div>
          {/* SOCIALS */}
          <div className={styles.socials}>
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
}
