import Link from "next/link";
import { LogoSvg } from "../components/svgIcons";

export default function Logo() {
  return (
      <div
          id="logo"
      >
          <Link href="/">
              <LogoSvg />
          </Link>
      </div>
  )
}
