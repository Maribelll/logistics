import Image from "next/image";
import styles from "@/styles/services.module.scss";
import Layout from "@/Components/Layout";
import Link from "next/link";

import img1 from "/public/services/dry-van.png";
import img2 from "/public/services/temp-controlled.png";
import img3 from "/public/services/exp-services.png";
import img4 from "/public/services/other-equipment.png";

export default function Home() {
  return (
    <Layout title="AAS Logistic" keywords="" description="">
      <div className="main_container_dark">
        <h1>Our Services</h1>
        <div className={styles.services_page}>
          <div className={styles.services}>
            <h3>Freight transportation solutions for the long haul</h3>
            <p>
              When it comes to managing your partial or full truckload shipping
              needs, we have the right carrier and logistics solutions for the
              job.
            </p>
            <div className={styles.four_services}>
              <div className={styles.item}>
                <Image src={img1}></Image>
                <p>Dry Van</p>
              </div>
              <div className={styles.item}>
                {" "}
                <Image src={img2}></Image>
                <p>Temperature Controlled</p>
              </div>
              <div className={styles.item}>
                {" "}
                <Image src={img3}></Image>
                <p>Expedited Services</p>
              </div>
              <div className={styles.item}>
                {" "}
                <Image src={img4}></Image>
                <p>Other Specialized Equipment</p>
              </div>
            </div>
            <div className="button_double">
              <button id={styles.but} className="button_long">
                get aN LTL RATE
              </button>
              <button id={styles.but2} className="button_long">
                get a truckload RATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
