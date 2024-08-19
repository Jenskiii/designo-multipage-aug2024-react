import data from "../../data/homeData.json";
import { Button } from "../../components/UI/Button/Button";
import styles from "./Home.module.css";
export function Home() {
  return (
    <>
      <section className="container" aria-label="full-bleed">
        <div className="hero">
          <div>
            <h1 className="heading-1">{data.title}</h1>
            <p>{data.subtitle}</p>
            <Button theme="light">Learn more</Button>
          </div>
          <img
            src={data.hero_img}
            alt="Mobile phone with the text 'FRAME' inside"
          />
        </div>
      </section>
    </>
  );
}
