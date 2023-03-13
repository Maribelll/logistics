import logo from "../public/Logo-white.svg";
import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <>
      <div className="logo">
        <Link href={"/"}>
          <span>
            <Image src={logo} alt="Logo" />
          </span>
        </Link>
      </div>
    </>
  );
}
