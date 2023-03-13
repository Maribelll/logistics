import Link from "next/link";
import Image from "next/image";
import Logo from "../public/Logo-white.svg";
import styles from "../styles/navbar.module.scss";

// import { Navadapt } from "../Components/Navadapt";
import img from "../public/arrow-down.png";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link href={"/"}>
          <a>
            <span className={styles.logo1}>
              <Image src={Logo} alt="Logo" />
            </span>
          </a>
        </Link>
      </div>
      {/* <Navadapt /> */}

      <div className={styles.menu}>
        <a className={styles.servbut}>
          <span className={styles.orange}>Services</span>
          <span
            style={{
              paddingRight: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Image src={img} alt=""></Image>
          </span>
          {/* <div className={styles.onmenu} style={{ paddingRight: "30px" }}> */}
          <div className={styles.navigul}>
            <div className={styles.navserv1}>
              <h3>PACKAGES</h3>
              <Link href={"/services/website-packages"}>
                <a>
                  <li>Website Packages</li>
                </a>
              </Link>
              <Link href={"/services/brand-logo-design-packages"}>
                <a>
                  <li>Brand &amp; Logo Design Packages</li>
                </a>
              </Link>
              <Link href={"/services/new-business-packages"}>
                <a>
                  <li>New Business Packages</li>
                </a>
              </Link>
            </div>

            <div
              class="line"
              style={{
                width: "1px",
                height: "222px",
                borderRight: "1px solid  #F9B384",
                margin: "0 29px",
                alignSelf: "center",
              }}
            ></div>
            <div className={styles.navserv2}>
              <h3>SERVICES</h3>
              <Link href={"/services/email-design"}>
                <a>
                  <li>Email Design</li>
                </a>
              </Link>
              <Link href={"/services/digital-&-print-design"}>
                <a>
                  <li> Digital &amp; Print Design</li>
                </a>
              </Link>
              <Link href={"/services/design-retainer"}>
                <a>
                  <li>Design Retainer </li>
                </a>
              </Link>
              <Link href={"/services/website-maintanence"}>
                <a>
                  <li>Website Support</li>
                </a>
              </Link>
              <Link href={"/services/web-development"}>
                <a>
                  <li>Web Development</li>
                </a>
              </Link>
              <Link href={"/services/product-photos-&-videos"}>
                <a>
                  <li>Product Photos &amp; Videos</li>
                </a>
              </Link>
            </div>
          </div>
          {/* </div> */}
        </a>

        <a className={styles.workon}>
          <span className={styles.orange}>Work</span>
          <span
            style={{
              paddingRight: "20px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <Image src={img} alt=""></Image>
          </span>
          <div className={styles.navigulwork}>
            <div className={styles.navwork}>
              <Link href={"/work"}>
                <a>
                  <li>Case Studies</li>
                </a>
              </Link>
              <Link href={"/gallery"}>
                <a>
                  <li>Our Work</li>
                </a>
              </Link>
            </div>
          </div>
        </a>
        <Link href={"/pricing"}>
          <a class={styles.orange} style={{ paddingRight: "30px" }}>
            Pricing
          </a>
        </Link>
        <Link href={"/about"}>
          <a class={styles.orange} style={{ paddingRight: "30px" }}>
            About
          </a>
        </Link>
        <Link href={"/blog"}>
          <a class={styles.orange} style={{ paddingRight: "30px" }}>
            Blog
          </a>
        </Link>
      </div>
    </nav>
  );
}
// меню с переключателем
// export function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <div>
//         <Link href={"/"}>
//           <a>
//             <span className={styles.logo1}>
//               <Image src={Logo} alt="Logo" />
//             </span>
//           </a>
//         </Link>
//       </div>
//       <Navadapt />

//       <div className={styles.menu}>
//         <input type="radio" name="vk" id="vklserv" />
//         <label
//           style={{ color: "#2E303D", marginRight: "10px" }}
//           htmlFor="vklserv"
//         >
//           Services
//           <span style={{ marginLeft: "10px", marginRight: "10px" }}>
//             <Image src={img} alt=""></Image>
//           </span>
//         </label>
//         <div className={styles.navigul}>
//           <input type="radio" name="vk" id="vklmenu" />
//           <label
//             style={{
//               position: "absolute",
//               right: "10px",
//               color: "#db8e76",
//               marginRight: "-7px",
//               fontSize: "22px",
//             }}
//             htmlFor="vklmenu"
//           >
//             {/* <Image src={img} alt=""></Image> */}
//             &#215;
//             <span style={{ marginRight: "10px" }}></span>
//           </label>
//           <div className={styles.navserv1}>
//             <h3>PACKAGES</h3>
//             <Link href={"/services/website-packages"}>
//               <a>
//                 <li>Website Packages</li>
//               </a>
//             </Link>
//             <Link href={"/services/brand-logo-design-packages"}>
//               <a>
//                 <li>Brand &amp; Logo Design Packages</li>
//               </a>
//             </Link>
//             <Link href={"/services/new-business-packages"}>
//               <a>
//                 <li>New Business Packages</li>
//               </a>
//             </Link>
//           </div>

//           <div
//             class="line"
//             style={{
//               width: "1px",
//               height: "222px",
//               borderRight: "1px solid  #F9B384",
//               margin: "0 29px",
//               alignSelf: "center",
//             }}
//           ></div>
//           <div className={styles.navserv2}>
//             <h3>SERVICES</h3>
//             <Link href={"/services/email-design"}>
//               <a>
//                 <li>Email Design</li>
//               </a>
//             </Link>
//             <Link href={"/services/digital-&-print-design"}>
//               <a>
//                 <li> Digital &amp; Print Design</li>
//               </a>
//             </Link>
//             <Link href={"/services/design-retainer"}>
//               <a>
//                 <li>Design Retainer </li>
//               </a>
//             </Link>
//             <Link href={"/services/website-maintanence"}>
//               <a>
//                 <li>Website Support</li>
//               </a>
//             </Link>
//             <Link href={"/services/web-development"}>
//               <a>
//                 <li>Web Development</li>
//               </a>
//             </Link>
//             <Link href={"/services/product-photos-&-videos"}>
//               <a>
//                 <li>Product Photos &amp; Videos</li>
//               </a>
//             </Link>
//           </div>
//         </div>

//         <input type="radio" name="vk" id="vklwork" />
//         <label
//           style={{ color: "#2E303D", marginRight: "10px" }}
//           htmlFor="vklwork"
//         >
//           Work
//           <span style={{ marginLeft: "10px", marginRight: "10px" }}>
//             <Image src={img} alt=""></Image>
//           </span>
//         </label>
//         <div className={styles.navigulwork}>
//           <div className={styles.navwork}>
//             <Link href={"/work"}>
//               <a>
//                 <li>Case Studies</li>
//               </a>
//             </Link>
//             <Link href={"/gallery"}>
//               <a>
//                 <li>Our Work</li>
//               </a>
//             </Link>
//           </div>
//         </div>

//         <Link href={"/pricing"}>
//           <a style={{ paddingRight: "30px" }}>Pricing</a>
//         </Link>
//         <Link href={"/about"}>
//           <a style={{ paddingRight: "30px" }}>About</a>
//         </Link>
//         <Link href={"/blog"}>
//           <a style={{ paddingRight: "30px" }}>Blog</a>
//         </Link>

//         <Link href={"/contact"}>
//           <a style={{ paddingRight: "0px", color: "white" }}>
//             <button className={style.dark}>Get Started</button>
//           </a>
//         </Link>
//       </div>
//     </nav>
//   );
// }
