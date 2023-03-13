import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo-white.svg";
import styles from "../styles/navbar.module.scss";

// import { Navadapt } from "../Components/Navadapt";
import img from "../public/arrow-down.png";

export function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.menu}>
          <a className={styles.servbut}>
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
                <Link style={{ paddingBottom: "15px" }} href={"/"}>
                  OVERVIEW
                </Link>
                <Link style={{ paddingBottom: "15px" }} href={"/"}>
                  LTL
                </Link>
                <Link href={"/"}>TRUCKLOAD</Link>
              </div>
            </div>
          </a>

          <a className={styles.workon}>
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
                <Link href={"/"}>LTL RATE</Link>
                <Link href={"/"}>TRUCKLOAD RATE</Link>
              </div>
            </div>
          </a>
          <Link
            class={styles.orange}
            style={{ paddingRight: "30px" }}
            href={"/"}
          >
            TRACKING
          </Link>
          <Link
            class={styles.orange}
            style={{ paddingRight: "30px" }}
            href={"/"}
          >
            ABOUT
          </Link>
          <Link class={styles.orange} href={"/"}>
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
}
