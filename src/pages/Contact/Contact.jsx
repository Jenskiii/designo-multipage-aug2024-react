import { useState } from "react";
import { LocationLinks } from "../../components/LocationLinks/LocationLinks";
import { Form, FormGroup, FormTextArea } from "../../components/UI/Form/Form";
import { Leaf } from "../../components/UI/Leaf/Leaf";
import data from "../../data/contactData.json";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    textarea: "",
  });

  const [isAfterSubmit, setIsAfterSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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
            <Form formData={formData} afterSubmit={setIsAfterSubmit}>
              <FormGroup
                label="Name"
                id="name"
                setValue={handleInputChange}
                value={formData.name}
                afterSubmit={isAfterSubmit}
              />
              <FormGroup
                label="Email Address"
                id="email"
                type="email"
                setValue={handleInputChange}
                value={formData.email}
                afterSubmit={isAfterSubmit}
              />
              <FormGroup
                label="Phone"
                id="phone"
                type="tel"
                setValue={handleInputChange}
                value={formData.phone}
                afterSubmit={isAfterSubmit}
              />
              <FormTextArea
                label="Your Message"
                id="textarea"
                setValue={handleInputChange}
                value={formData.textarea}
                afterSubmit={isAfterSubmit}
              />
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
