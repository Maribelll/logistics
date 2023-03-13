import Link from "next/link";
import Image from "next/image";
import img from "../public/LTL_truck.svg";
import styles from "../styles/card.module.scss";

export function Cardleft() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.cardleft}
    >
      <div className={styles.card_photo}>
        <Image src={img} alt="Financing team discussing a topic." />
      </div>
      <div style={{ maxWidth: "444px" }} className={styles.card_text}>
        <h3>Less than truckload (LTL) freight services</h3>
        <p>
          Ship less than truckload freight that offers flexibility, cost
          effectiveness, and environmental friendliness.
        </p>
        <div className="button_and_link">
          <button className="button_shot">GET A RATE</button>
          <Link href={"/"}>LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}
