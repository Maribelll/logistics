import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.scss";

import img from "../public/arrow-down.png";

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.menu}>
        <Link href={"/"} className={styles.servbut}>
          <span className={styles.orange}>SERVICES</span>
          <span
            style={{
              paddingRight: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Image src={img} alt=""></Image>
          </span>

          <div className={styles.navigul}>
            <div className={styles.navserv1}>
              <li style={{ paddingBottom: "15px" }}>
                <Link href={"/"}>OVERVIEW</Link>
              </li>
              <li style={{ paddingBottom: "15px" }}>
                <Link href={"/"}>LTL</Link>
              </li>
              <li style={{ paddingBottom: "15px" }}>
                {" "}
                <Link href={"/"}>TRUCKLOAD</Link>
              </li>
            </div>
          </div>
        </Link>

        <Link href={"/"} className={styles.workon}>
          <span className={styles.orange}>RATES</span>
          <span
            style={{
              paddingRight: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Image src={img} alt=""></Image>
          </span>
          <div className={styles.navigulrates}>
            <div className={styles.navrates}>
              <li>
                <Link href={"/"}>LTL RATE </Link>
              </li>

              <li>
                <Link href={"/"}>TRUCKLOAD RATE </Link>
              </li>
            </div>
          </div>
        </Link>
        <Link
          className={styles.orange}
          style={{ paddingRight: "30px" }}
          href={"/"}
        >
          TRACKING
        </Link>
        <Link
          className={styles.orange}
          style={{ paddingRight: "30px" }}
          href={"/"}
        >
          ABOUT
        </Link>
        <Link className={styles.orange} href={"/"}>
          CONTACT
        </Link>
      </div>
    </div>
  );
}
