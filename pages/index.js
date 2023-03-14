import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Layout from "@/Components/Layout";
import Link from "next/link";
// import banner from "@/public/Hero.jpg";
import banner2 from "@/public/Hero2.png";
import arrow from "/public/arrow-circle.svg";
import icon from "/public/hero-graphic.svg";
import { Cardleft } from "@/Components/Cardleft";
import { Cardright } from "@/Components/Cardright";
import { Navbar } from "@/Components/Navbar";
import { Logo } from "@/Components/Logo";
import { Footer } from "@/Components/Footer";

export default function Home() {
  return (
    <Layout title="AAS Logistic" keywords="" description="">
      <div className="main_container">
        <div className={styles.mainscreen}>
          <div className={styles.main}>
            <Logo />
            <div className="mainscreen_svg">
              <Image src={icon}></Image>
            </div>
            <div className={styles.main_text}>
              <div className={styles.main_text_all}>
                <h1 className={styles.header1}>
                  Nationwide
                  <br />
                  <span>freight shipping</span>
                  <br /> made easy
                </h1>

                <div className={styles.main_text_buttons}>
                  <Link href={"/"}>
                    <button className="button_long_dark">
                      <div>
                        Get a rate: <span>LTL</span>
                      </div>
                      <Image src={arrow}></Image>
                    </button>
                  </Link>
                  <Link href={"/"}>
                    <button className="button_long_dark">
                      <div>
                        Get a rate: <span>Truckload</span>
                      </div>
                      <Image src={arrow}></Image>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.main_photo}>
              <Navbar />
              {/* <Image src={banner} alt="banner" width={709} height={760} /> */}
            </div>
            <div className={styles.main_photo2}>
              <Image src={banner2} alt="banner" width={320} height={234} />
            </div>
          </div>
        </div>
        <Cardleft />
        <Cardright />
        <Footer />
      </div>
    </Layout>
  );
}
