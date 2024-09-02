import { LocationLinks } from "../../components/LocationLinks/LocationLinks";
import { Form, FormGroup, FormTextArea } from "../../components/UI/Form/Form";
import { Leaf } from "../../components/UI/Leaf/Leaf";
import data from "../../data/contactData.json";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <>
      <div className="main"> 
        {/* HERO */}
        <section
          className="container"
          aria-label="full-bleed"
          aria-labelledby="contact-hero">
          {/* HERO BODY*/}
          <div className={`${styles.hero} | hero`}>
            <div className={styles["hero-body"]}>
              <h1 id="contact-hero" className="heading-1">
                {data.hero.title}
              </h1>
              <p>{data.hero.paragraph}</p>
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
            {/* FORM */}
            <Form>
              <FormGroup label="Name" id="name" />
              <FormGroup label="Email Address" id="email" />
              <FormGroup label="Phone" id="phone" />
              <FormTextArea label="Your Message" id="textarea" />
            </Form>
          </div>
        </section>
        {/* LINKS */}
        <LocationLinks className={styles.locations} />
        {/* LEAF */}
        <Leaf className={styles.leaf} />
      </div>
    </>
  );
}
