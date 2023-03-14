import Link from "next/link";
import Image from "next/image";
import arrow from "../public/arrow-right.svg";
import styles from "../styles/footer.module.scss";

import logo from "../public/logo-icon.svg";

export function Footer() {
  return (
    <div className="page_container_dark">
      <div className={styles.footer}>
        <div className={styles.button_double}>
          <button className="button_grey">
            <div>
              Get a rate: <span>LTL</span>
            </div>
            <Image src={arrow}></Image>
          </button>
          <button className="button_grey">
            <div>
              Get a rate: <span>Truckload</span>
            </div>
            <Image src={arrow}></Image>
          </button>
        </div>
        <hr id={styles.line1} className={styles.line1}></hr>
        <div className={styles.image}>
          <Image src={logo}></Image>
        </div>
        <div className={styles.info}>
          <div className={styles.part1}>
            <h5>Nationwide freight shipping made easy.</h5>
            <p id={styles.copy}>
              {" "}
              &copy; Copyright AAS Logistics. All Rights Reserved.
            </p>
          </div>
          <div className={styles.part2}>
            <div className={styles.col1}>
              <h5>Services</h5>
              <li>
                <Link href={"/"}>Overview</Link>
              </li>
              <li>
                <Link href={"/"}>Services</Link>
              </li>
              <li>
                <Link href={"/"}>LTL</Link>
              </li>
              <li>
                <Link href={"/"}>Truckload</Link>
              </li>
            </div>
            <div className={styles.col2}>
              <h5>Resources</h5>
              <li>
                <Link href={"/"}>LTL Rate</Link>
              </li>
              <li>
                <Link href={"/"}>Truckload Rate</Link>
              </li>
              <li>
                <Link href={"/"}>Tracking</Link>
              </li>
            </div>
            <div className={styles.col3}>
              <h5>Company</h5>
              <li>
                <Link href={"/"}>About</Link>
              </li>
              <li>
                <Link href={"/"}>Contact</Link>
              </li>
            </div>
          </div>
        </div>
        <hr className={styles.line1}></hr>
        <div className={styles.policy}>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms & Conditions</Link>
          <Link href={"/"}>Our FMCSA Profile</Link>
        </div>
        <p id={styles.copy2}>
          {" "}
          &copy; Copyright AAS Logistics. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
