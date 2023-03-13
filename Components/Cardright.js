import Link from "next/link";
import Image from "next/image";
import img from "../public/Truckload.svg";
import styles from "../styles/card.module.scss";

export function Cardright() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={styles.cardright}
    >
      <div style={{ maxWidth: "430px" }} className={styles.card_text}>
        <h3>Full truckload and freight services</h3>
        <p>
          Get your freight shipped efficiently in a dedicated truck from point A
          to point B.
        </p>
        <div className="button_and_link">
          <button className="button_shot">GET A RATE</button>
          <Link href={"/"}>LEARN MORE</Link>
        </div>
      </div>
      <div className={styles.card_photo}>
        <Image src={img} alt="Financing team discussing a topic." />
      </div>
    </div>
  );
}
